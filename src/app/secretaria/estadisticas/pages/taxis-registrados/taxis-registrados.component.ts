import { Component }                            from '@angular/core';
import { RespTaxisRegistrados, TaxiRegistrado } from 'src/app/interfaces';
import { DownloadService }                      from 'src/app/services/download.service';
import { EstadisticasService }                  from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxis-registrados',
  templateUrl: './taxis-registrados.component.html',
  styleUrls: ['./taxis-registrados.component.scss']
})
export class TaxisRegistradosComponent {

  taxis!: TaxiRegistrado[];
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
    this.eS.getTaxisRegistrados(pagina).subscribe({
      next: (data: RespTaxisRegistrados) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
      }});
  }
  exportar() {
    this.eS.getExcelTaxisRegistrados().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxis Registrados Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxis Registrados'
        );
      }})
  }

}
