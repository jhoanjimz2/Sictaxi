import { Component }                                            from '@angular/core';
import { RespTaxisTarjetaOperacionVigente, TaxiTarjetaVigente } from 'src/app/interfaces';
import { DownloadService }                                      from 'src/app/services/download.service';
import { EstadisticasService }                                  from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-taxis-tarjeta-vigente',
  templateUrl: './taxis-tarjeta-vigente.component.html',
  styleUrls: ['./taxis-tarjeta-vigente.component.scss']
})
export class TaxisTarjetaVigenteComponent {

  taxis!: TaxiTarjetaVigente[];
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
    this.eS.getTaxisTarjetaOperaciónVigente(pagina).subscribe({
      next: (data: RespTaxisTarjetaOperacionVigente) => {
        this.totalPages = data.pages;
        this.taxis = data.data;
      }});
  }
  exportar() {
    this.eS.getExcelTaxiTarjetaOperacionVigenteExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Taxis Con Tarjeta De Operación Vigente');
      }})
  }
}
