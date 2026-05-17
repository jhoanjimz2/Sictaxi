import { Component, inject }   from '@angular/core';
import { TaxiRCEVencida }      from 'src/app/interfaces';
import { DownloadService }     from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxis-rce-vencido',
  templateUrl: './taxis-rce-vencido.component.html',
  styleUrls: ['./taxis-rce-vencido.component.scss']
})
export class TaxisRceVencidoComponent {

  private download = inject(DownloadService)
  private eS       = inject(EstadisticasService)

  taxis!: TaxiRCEVencida[];
  totalPages: number = 0;
  paginaActual: number = 0;

  constructor() {
    this.pagina({pagina: 1});
  }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxisRCEVencido(pagina).subscribe({
      next: (data: any) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
      }});
  }
  exportar() {
    ;
    this.eS.getExcelTaxiRCEVencidoExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxis RCE Vencida Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxis RCE Vencida'
        );
      }})
  }
}
