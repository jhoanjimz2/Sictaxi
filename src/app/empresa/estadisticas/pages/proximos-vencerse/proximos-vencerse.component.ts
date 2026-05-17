import { Component }                                         from '@angular/core';
import { FechasVencidasEmpresa, RespFechasVencidasEmpresas } from 'src/app/interfaces';
import { DownloadService }                                   from 'src/app/services/download.service';
import { EstadisticasService }                               from 'src/app/services/estadisticas.service';
import { environment }                                       from 'src/environments/environment';

@Component({
  selector: 'app-proximos-vencerse',
  templateUrl: './proximos-vencerse.component.html',
  styleUrls: ['./proximos-vencerse.component.scss']
})
export class ProximosVencerseComponent {

  fechasVencida: FechasVencidasEmpresa[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  buscar: string = '';
  prevImg = environment.apiImg;

  constructor(
    private eS: EstadisticasService,
    private download: DownloadService
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    ;
    this.eS.getDataProximosDocumentosVencidosEmpresa(pagina).subscribe({
      next: (data: RespFechasVencidasEmpresas) => {
        this.totalPages = data.pages;
        this.fechasVencida = data.data;
        ;
      }, error: (error: any) => {
        this.totalPages = 0;
        this.fechasVencida = [];
      }
    })
  }
  exportar() {
    this.eS.getExcelProximosDocumentoVencerseEmpresa().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Proximos a vencerse');
      }})
  }
  buscando(event: string) {
    this.buscar = event.toUpperCase();
  }

}
