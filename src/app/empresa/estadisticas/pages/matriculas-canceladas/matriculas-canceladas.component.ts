import { Location }                                 from '@angular/common';
import { Component }                                from '@angular/core';
import { RespTaxisChatarrizados, TaxiChatarrizado } from 'src/app/interfaces';
import { DownloadService }                          from 'src/app/services/download.service';
import { EstadisticasService }                      from 'src/app/services/estadisticas.service';

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
    private eS: EstadisticasService,
    private download: DownloadService,
    private location: Location
  ) {
    this.pagina({pagina: 1});
  }

  pagina({pagina}: any) {
    ;
    this.paginaActual = pagina;
    this.eS.getTaxisChatarrizados(pagina).subscribe({
      next: (data: RespTaxisChatarrizados) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
        if ( data.data.length < 1 ) {
          this.location.back();
        }
      }});
  }
  exportar() {
    ;
    this.eS.getExcelChatarrizadosTaxiExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Matriculas Chatarrizadas');
      }})
  }
}
