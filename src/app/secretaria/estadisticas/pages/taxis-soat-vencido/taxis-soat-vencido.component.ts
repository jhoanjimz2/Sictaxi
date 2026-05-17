import { Component }                             from '@angular/core';
import { RespTaxisSoatVencido, TaxiSoatVencido } from 'src/app/interfaces/taxis-soat-vencido';
import { DownloadService }                       from 'src/app/services/download.service';
import { EstadisticasService }                   from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxis-soat-vencido',
  templateUrl: './taxis-soat-vencido.component.html',
  styleUrls: ['./taxis-soat-vencido.component.scss']
})
export class TaxisSoatVencidoComponent {

  taxis!: TaxiSoatVencido[];
  totalPages: number = 0;
  paginaActual: number = 0;

  constructor(
    private eS: EstadisticasService,
    private download: DownloadService
    ) {
      this.pagina({pagina: 1});
    }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxisSoatVencido(pagina).subscribe({
      next: (data: RespTaxisSoatVencido) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
        ;
      }});
  }
  exportar() {
    this.eS.getExcelTaxiSoatVencidoExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxis Soat Vencido Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxis Soat Vencido'
        );
      }})
  }

}
