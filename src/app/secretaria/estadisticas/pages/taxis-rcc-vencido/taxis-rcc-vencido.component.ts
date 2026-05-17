import { Component, inject }   from '@angular/core';
import { TaxiRCCVencida }      from 'src/app/interfaces';
import { DownloadService }     from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxis-rcc-vencido',
  templateUrl: './taxis-rcc-vencido.component.html',
  styleUrls: ['./taxis-rcc-vencido.component.scss']
})
export class TaxisRccVencidoComponent {

  private download = inject(DownloadService)
  private eS       = inject(EstadisticasService)

  taxis!: TaxiRCCVencida[];
  totalPages: number = 0;
  paginaActual: number = 0;

  constructor() {
    this.pagina({pagina: 1});
  }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxisRCCVencido(pagina).subscribe({
      next: (data: any) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
      }});
  }
  exportar() {
    this.eS.getExcelTaxiRCCVencidoExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxis RCC Vencida Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxis RCC Vencida'
        );
      }})
  }
}
