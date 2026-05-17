import { Injectable }                                from '@angular/core';
import { ConexionService }                           from './conexion.service';
import { HttpClient }                                from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin, of } from 'rxjs';
import { map, tap }                                  from 'rxjs/operators';
import { EmpresaAutorizada }                         from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DocumentosVencidosService extends ConexionService {

  private vehiculosCount = new BehaviorSubject<number>(0);
  private conductoresCount = new BehaviorSubject<number>(0);
  private totalDocumentosVencidos$ = new BehaviorSubject<number>(0);
  private especificacionesData = new BehaviorSubject<any>({});

  private conductoresData = new BehaviorSubject<any[]>([]);
  conductoresData$ = this.conductoresData.asObservable();

  private vehiculosData = new BehaviorSubject<any[]>([]);
  vehiculosData$ = this.vehiculosData.asObservable();


  _selectedEmpresa = new BehaviorSubject<EmpresaAutorizada | null>(null);

  constructor(private _http: HttpClient) {
    super(_http);
  }

  paramsComplete(page: number) {
    return this._selectedEmpresa.value?.id
    ? { ciudad: 'SantaMarta', idEmpresa: this._selectedEmpresa.value.id, page }
    : { ciudad: 'SantaMarta', page };
  }
  paramsSimple() {
    return this._selectedEmpresa.value?.id
    ? { ciudad: 'SantaMarta', idEmpresa: this._selectedEmpresa.value.id }
    : { ciudad: 'SantaMarta' };
  }

  getExcelDocumentoVencidosConductores(){
    let params = this.paramsSimple();
    return this.getAuthExcel('/documentos-vencidos/excel-conductor', params);
  }
  getExcelDocumentoVencidosVehiculos(){
    let params = this.paramsSimple();
    return this.getAuthExcel('/documentos-vencidos/excel-vehiculo', params);
  }

  actualizarFechaVehiculo(id: number, data: any, page: number): Observable<any> {
    return this.postAuth(`/vehiculo/update/${id}`, data).pipe(
      tap(() => {
        this.ListadoVehiculos(page).subscribe({
          next: (response: any) => {
            if (response.data && Array.isArray(response.data.data)) {
              this.vehiculosData.next(response.data.data);
              this.cargarEspecificacionesContador().subscribe();
            }
          }
        });
      })
    );
  }

  actualizarFechaConductor(id: number, data:any, page: number): Observable<any> {
    return this.postAuth(`/conductor/update/${id}`, data).pipe(
      tap(() => {
        this.ListadoConductores(page).subscribe({
          next: (response: any) => {
            if (response.data && Array.isArray(response.data.data)) {
              this.conductoresData.next(response.data.data);
              this.cargarEspecificacionesContador().subscribe();
            }
          }
        });
      })
    );
  }

  desvincular(vinculaciones: number[], clave: string, page: number, tipo: 'conductor' | 'vehiculo'): Observable<any> {
    let data = { vinculaciones, clave };
    return this.postAuth('/vinculaciones/multiple-desvinculaciones', data).pipe(
      tap(() => {
        if (tipo === 'conductor') {
          this.ListadoConductores(page).subscribe({
            next: (response: any) => {
              if (response.data && Array.isArray(response.data.data)) {
                this.conductoresData.next(response.data.data);
              }
            }
          });
        } else if (tipo === 'vehiculo') {
          this.ListadoVehiculos(page).subscribe({
            next: (response: any) => {
              if (response.data && Array.isArray(response.data.data)) {
                this.vehiculosData.next(response.data.data);
              }
            }
          });
        }
      })
    );
  }
  ListadoConductores(page: number): Observable<any> {
    return this.getAuth('/documentos-vencidos/list-conductor', { page });
  }

  ListadoVehiculos(page: number): Observable<any> {
    return this.getAuth('/documentos-vencidos/list-vehiculos', { page });
  }
  ListadoConductoresSecretaria(page: number){
    let params = this.paramsComplete(page);
    return this.getAuth('/documentos-vencidos/list-conductor', params);
  }
  ListadoVehiculosSecreataria(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/documentos-vencidos/list-vehiculos', params);
  }

  cargarCountVehiculos(): Observable<any> {
    return this.getAuth('/documentos-vencidos/list-vehiculos').pipe(
      tap((response) => {
        const count = response.data.total;
        this.vehiculosCount.next(count);
      })
    );
  }

  cargarCountConductores(): Observable<any> {
    return this.getAuth('/documentos-vencidos/list-conductor').pipe(
      tap((response) => {
        const count = response.data.total;
        this.conductoresCount.next(count);
      })
    );
  }

  cargarEspecificacionesContador(): Observable<any> {
    return this.getAuth('/documentos-vencidos/count').pipe(
      tap((response: any) => {
        const especificaciones = response.data;
        this.especificacionesData.next(especificaciones);
        const total = Object.values(especificaciones).reduce((sum, value) =>
          (sum as number) + (value as number), 0);
        this.totalDocumentosVencidos$.next(total as number);
      })
    );
  }

  obtenerConductoresData(): Observable<any[]> {
    return this.conductoresData.asObservable();
  }

  obtenerTotalDocumentosVencidos(): Observable<number> {
    return this.totalDocumentosVencidos$.asObservable();
  }

  obtenerVehiculosCount(): Observable<number> {
    return this.vehiculosCount.asObservable();
  }

  obtenerConductoresCount(): Observable<number> {
    return this.conductoresCount.asObservable();
  }

  obtenerEspecificacionesData(): Observable<any> {
    return this.especificacionesData.asObservable();
  }

  cargarDocumentosVencidos(): Observable<any> {
    return forkJoin([
      this.cargarCountVehiculos(),
      this.cargarCountConductores(),
      this.cargarEspecificacionesContador()
    ]);
  }

  obtenerAsociados(tipo: 'placa' | 'cedula', valor: string): Observable<any> {
    const params = { [tipo]: valor };
    return this.getAuth('/vinculaciones/asociadas',params);
  }
}
