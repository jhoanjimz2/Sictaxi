import { Component }                                            from '@angular/core';
import { RespTaxisTarjetaOperacionVencida, TaxiTarjetaVencida } from 'src/app/interfaces';
import { DownloadService }                                      from 'src/app/services/download.service';
import { EstadisticasService }                                  from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxis-tarjeta-vencida',
  templateUrl: './taxis-tarjeta-vencida.component.html',
  styleUrls: ['./taxis-tarjeta-vencida.component.scss']
})
export class TaxisTarjetaVencidaComponent {

  taxis!: TaxiTarjetaVencida[];
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
    this.eS.getTaxisTarjetaOperaciónVencida(pagina).subscribe({
      next: (data: RespTaxisTarjetaOperacionVencida) => {
        this.totalPages = data.last_page;
        this.taxis = data.data;
      }});
  }
  exportar() {
    this.eS.getExcelTaxiTarjetaOperacionVencidaExcel().subscribe({
      next: (data: any) => {
        this.download.download(data,
          this.eS._selectedEmpresa.value
          ? `Taxis Tarjeta De Operación Vencida Empresa ${this.eS._selectedEmpresa.value.nombreEmpresa.replace(/\./g, '')}`
          : 'Taxis Tarjeta De Operación Vencida'
        );
      }})
  }

}
