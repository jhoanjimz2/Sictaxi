import { Component }                           from '@angular/core';
import { DocumentosVencidosService }           from 'src/app/services/documentos-vencidos.service';
import { DownloadService }                     from 'src/app/services/download.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-documentos-vencidos',
  templateUrl: './documentos-vencidos.component.html',
  styleUrls: ['./documentos-vencidos.component.scss'],
    animations: [
      trigger('fadeInOut', [
        transition(':enter', [style({ display: 'none', opacity: 0 }), animate(250, style({ display: 1, opacity: 1 }))]),
        transition(':leave', [animate(250, style({ display: 'none', opacity: 0 }))])
      ])
    ]
})
export class DocumentosVencidosComponent {

  filtro: string = '';
  verVehiculos: boolean = true;
  vehiculos: any[] = [];
  conductores: any[] = [];
  vehiculosFiltrados: any[] = [];
  conductoresFiltrados: any[] = [];
  totalPages: number = 0;
  paginaActual: number = 1;


  constructor(
    private DVS: DocumentosVencidosService,
    private download: DownloadService,
  ) {
    this.cargarPagina(1);
    this.DVS.conductoresData$.subscribe((data) => {
      this.conductores = [...data];
      this.filtrarDatos();
    });
    this.DVS.vehiculosData$.subscribe((data) => {
      this.vehiculos = [...data];
      this.filtrarDatos();
    });
  }

  onViewChange() {
    if (this.verVehiculos) {
      this.vehiculos = [];
    } else {
      this.conductores = [];
    }
    this.cargarPagina(1);
  }

  cargarPagina(page: number) {
    this.paginaActual = page;
    ;

    if (this.verVehiculos) {
        this.DVS.ListadoVehiculosSecreataria(page).subscribe({
            next: (response: any) => {
                if (response.data && Array.isArray(response.data.data)) {
                    const data = response.data;
                    this.vehiculos = [...data.data];
                    this.vehiculosFiltrados = [...this.vehiculos];
                    this.totalPages = data.last_page || 0;
                } else if (Array.isArray(response.data)) {
                    this.vehiculos = [...response.data];
                    this.totalPages = this.totalPages || 0;
                }
                ;
            }});
    } else {
        this.DVS.ListadoConductoresSecretaria(page).subscribe({
            next: (response: any) => {
                if (response.data && Array.isArray(response.data.data)) {
                    const data = response.data;
                    this.conductores = [...data.data];
                    this.conductoresFiltrados = [...this.conductores];
                    this.totalPages = data.last_page || 0;
                } else if (Array.isArray(response.data)) {
                    this.conductores = [...response.data];
                    this.totalPages = this.totalPages || 0;
                }
                ;
            }});
    }
  }
  exportar() {
    ;
    if (this.verVehiculos) {
      this.DVS.getExcelDocumentoVencidosVehiculos().subscribe({
        next: (data: any) => {
          this.download.download(data,
            this.DVS._selectedEmpresa.value
            ? `Documentos vencidos vehículos Empresa ${this.DVS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
            : 'Documentos vencidos vehículos'
          );
          ;
        }});
    } else {
      this.DVS.getExcelDocumentoVencidosConductores().subscribe({
        next: (data: any) => {
          this.download.download(data,
            this.DVS._selectedEmpresa.value
            ? `Documentos vencidos conductores Empresa ${this.DVS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
            : 'Documentos vencidos conductores'
          );
          ;
        }});
    }
  }
  pagina(event: any) {
    const pageNumber = event.pagina;
    if (pageNumber) {
      this.cargarPagina(pageNumber);
    }
  }

  buscar(busca: string) {
    this.filtro = busca.toLowerCase().trim();
    this.filtrarDatos();
  }

  filtrarDatos() {
    if (this.verVehiculos) {
      this.vehiculosFiltrados = this.vehiculos.filter((vehiculo) =>
        vehiculo.placa?.toLowerCase().includes(this.filtro) ||
        vehiculo.cedula?.toLowerCase().includes(this.filtro)
      );
    } else {
      this.conductoresFiltrados = this.conductores.filter((conductor) =>
        conductor.cedula?.toLowerCase().includes(this.filtro) ||
        conductor.nombres?.toLowerCase().includes(this.filtro)
      );
    }
  }

}
