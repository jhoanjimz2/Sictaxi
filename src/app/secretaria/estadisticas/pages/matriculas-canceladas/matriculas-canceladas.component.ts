import { Location }                                 from '@angular/common';
import { Component }                                from '@angular/core';
import { RespTaxisChatarrizados, TaxiChatarrizado } from 'src/app/interfaces';
import { DownloadService }                          from 'src/app/services/download.service';
import { EstadisticasService }                      from 'src/app/services/estadisticas.service';
import { LoadingService }                           from 'src/app/services/loading.service';

@Component({
  selector: 'app-matriculas-canceladas',
  templateUrl: './matriculas-canceladas.component.html',
  styleUrls: ['./matriculas-canceladas.component.scss']
})
export class MatriculasCanceladasComponent {

  taxis!: TaxiChatarrizado[];
  paginaActual: number = 0;
  totalPages: number = 0;

  constructor(
    private loading: LoadingService,
    private eS: EstadisticasService,
    private download: DownloadService,
    private location: Location
  ) {
    this.pagina({pagina: 1});
  }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getTaxisChatarrizados(pagina).subscribe({
      next: (data: RespTaxisChatarrizados) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
        if ( data.data.length < 1 ) {
          this.location.back();
          this.loading.info('Sin matriculas canceladas')
        }
      }});
  }
  exportar() {
    this.eS.getExcelChatarrizadosTaxiExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Matriculas Chatarrizadas Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Matriculas Chatarrizadas'
        );
      }})
  }
}
