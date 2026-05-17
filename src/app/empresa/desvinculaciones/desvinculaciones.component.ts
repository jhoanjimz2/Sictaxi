import { Component, inject }                        from '@angular/core';
import * as moment                                  from 'moment';
import { DataDesvinculacion, RespDesvinculaciones } from 'src/app/interfaces';
import { StringFilter }                             from 'src/app/interfaces/filtroBusqueda';
import { DesvinculacionesService }                  from 'src/app/services/desvinculaciones.service';
import { DownloadService }                          from 'src/app/services/download.service';

@Component({
  selector: 'app-desvinculaciones',
  templateUrl: './desvinculaciones.component.html',
  styleUrls: ['./desvinculaciones.component.scss']
})
export class DesvinculacionesComponent {


  private DS       = inject(DesvinculacionesService);
  private download = inject(DownloadService)

  desvinculaciones: DataDesvinculacion[] = [];


  desvinculacionesFiltradas: any[] = [];
  filtro: string = '';

  totalPages: number = 0;
  paginaActual: number = 1;

  placa     = '';
  cedula    = '';
  dateStart = '';
  dateEnd   = '';

  constructor() {
    this.cargarPagina(1);
    this.DS.desvinculacionesData$.subscribe((data) => {
      this.desvinculaciones = [...data];
    });
  }
  onViewChange() {
    this.desvinculaciones = [];
    this.cargarPagina(1);
  }


  cargarPagina(page: number) {
    this.paginaActual = page;
    let params: Record<string, string | number> = {
      placa: this.placa,
      cedula: this.cedula,
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
      page
    };
    // Filtrar propiedades no válidas
    params = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value != null && value !== "")
    );

    this.DS.ListadoDesvinculaciones(params).subscribe({
      next: (response: RespDesvinculaciones) => {
        if (response.data && Array.isArray(response.data.data)) {
          const data = response.data;
          this.desvinculaciones = [...data.data];
          this.desvinculacionesFiltradas = [...this.desvinculaciones];
          this.totalPages = data.last_page || 0;
        } else if (Array.isArray(response.data)) {
          this.desvinculaciones = [...response.data];
          this.totalPages = this.totalPages || 0;
        }
      }});
  }

  pagina(event: any) {
    const pageNumber = event.pagina;
    if (pageNumber) {
      this.cargarPagina(pageNumber);
    }
  }


  buscar(busca: string) {
    if (StringFilter.esNumerica(busca)) {
      this.cedula = busca;
      this.placa  = '';
      this.cargarPagina(1);
    } else if (StringFilter.esAlfanumerica(busca)) {
      this.cedula = '';
      this.placa  = busca;
      this.cargarPagina(1);
    } else {
      this.cedula = '';
      this.placa  = '';
      this.cargarPagina(1);
    }
  }
  exportar() {
    this.DS.getExcelDesvinculaciones().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Desvinculaciones')
      }});
  }

  selectDate({start, end}: any) {
    this.dateStart = moment(start).format("YYYY-MM-DD");
    this.dateEnd   = moment(end).format("YYYY-MM-DD");
    this.cargarPagina(1);
  }

}

