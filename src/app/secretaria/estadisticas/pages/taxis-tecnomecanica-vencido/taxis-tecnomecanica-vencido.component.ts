import { Component, inject }        from '@angular/core';
import { TaxiTecnomecanicaVencida } from 'src/app/interfaces';
import { DownloadService }          from 'src/app/services/download.service';
import { EstadisticasService }      from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxis-tecnomecanica-vencido',
  templateUrl: './taxis-tecnomecanica-vencido.component.html',
  styleUrls: ['./taxis-tecnomecanica-vencido.component.scss']
})
export class TaxisTecnomecanicaVencidoComponent {

  private download = inject(DownloadService)
  private eS       = inject(EstadisticasService)

  taxis!: TaxiTecnomecanicaVencida[];
  totalPages: number = 0;
  paginaActual: number = 0;

  constructor() {
    this.pagina({pagina: 1});
  }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxisTecnomecanicaVencido(pagina).subscribe({
      next: (data: any) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
      }});
  }
  exportar() {
    this.eS.getExcelTaxiTecnoecanicaVencidoExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxis Tecnomecanica Vencido Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxis Tecnomecanica Vencido'
        );
      }})
  }
}
