import { inject, Injectable }                                       from '@angular/core';
import { MatDialog }                                                from '@angular/material/dialog';
import { HttpClient }                                               from '@angular/common/http';
import { ModalDocumentosVencidosComponent }                         from '../modals/modal-documentos-vencidos/modal-documentos-vencidos.component';
import { AlertaModeloSuscripcionesComponent }                       from '../modals/alerta-modelo-suscripciones/alerta-modelo-suscripciones.component';
import { AlertaPoliticasComponent }                                 from '../modals/alerta-politicas/alerta-politicas.component';
import { ConexionService }                                          from './conexion.service';
import { Termino }                                                  from '../interfaces';
import { BehaviorSubject, forkJoin, lastValueFrom, Observable, of } from 'rxjs';
// import { SuscripcionesService }                                     from './suscripciones.service';

@Injectable({
  providedIn: 'root'
})
export class ModalsService extends ConexionService {

  private dialog    = inject(MatDialog);
  private terminos$ = new BehaviorSubject<Termino[]>([]);
  // private suscriptionService = inject(SuscripcionesService)

  constructor() {
    super(inject(HttpClient));
  }

  // get suscription() {
  //   try {
  //     const encryptedData = localStorage.getItem('suscription');
  //     if (!encryptedData) return null;
  //     const decryptedData = this.suscriptionService.decryptData(encryptedData);
  //     return decryptedData?.suscription ?? null;
  //   } catch (error) {
  //     return null;
  //   }
  // }

  obtenerTerminos(): Observable<Termino[]> {
    return this.terminos$.asObservable();
  }

  async verificacion(): Promise<boolean> {
    try {
      const { data }: { data:Termino[] } = await lastValueFrom(this.getAuth('/terms/company'));
      this.terminos$.next(data);
      const hasEmptyAcceptances = data.some((item: any) => item.acceptances.length === 0);
      if (hasEmptyAcceptances) return false;
      return true;
    } catch (error) {
      return false;
    }
  }

  async modalsSuscripcion() {
    const acepto = await this.verificacion();
    if (!acepto && !localStorage.getItem('suscripcion_modal')) {
      this.politicas();
    }
    // else if (!localStorage.getItem('suscripcion_modal') && !this.suscription) {
    //   this.suscripcion();
    // }
  }

  politicas() {
    const dialogRef = this.dialog.open(AlertaPoliticasComponent, { disableClose: true, closeOnNavigation: false });
    dialogRef.afterClosed().subscribe(result => {});
  }
  documentos() {
    this.dialog.open(ModalDocumentosVencidosComponent, { disableClose: true, closeOnNavigation: false });
  }


  llamarTodosLosServiciosEmpresa(empresa_id: number): Observable<any> {
    const requests$ = this.terminos$.value.map((termino) =>
      this.aceptarPoliticasEmpresa(termino.id, empresa_id)
    );
    return forkJoin(requests$);
  }
  aceptarPoliticasEmpresa(id: number, empresa_id: number): Observable<any> {
    return this.postAuth('/terms/accepted', { terms_id: id, empresa_id });
  }

  // suscripcion() {
  //   if (!localStorage.getItem('suscripcion_modal') && !this.suscription && localStorage.getItem('token')) {
  //     this.dialog.open(AlertaModeloSuscripcionesComponent, { disableClose: true, closeOnNavigation: false });
  //   }
  // }


  llamarTodosLosServiciosVinculación(vinculacion_id: number): Observable<any> {
    const requests$ = this.terminos$.value.map((termino) =>
      this.aceptarPoliticasVinculacion(termino.id, vinculacion_id)
    );

    if (requests$.length === 0) {
      return of(null); // Retorna un Observable vacío para no dejarlo colgado
    }

    return forkJoin(requests$);
  }


  aceptarPoliticasVinculacion(id: number, vinculacion_id: number): Observable<any> {
    return this.postAuth('/terms/accepted', { terms_id: id, vinculacion_id });
  }




}
