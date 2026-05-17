import { Component }           from '@angular/core';
import { DownloadService }     from 'src/app/services/download.service';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-fases-exportar',
  templateUrl: './fases-exportar.component.html',
  styleUrls: ['./fases-exportar.component.scss']
})
export class FasesExportarComponent {


  constructor(
    private download: DownloadService,
    private eS: EstadisticasService
  ) {}

  exportar(page: number) {
    this.eS.getExcelDocumentoVencidos(page).subscribe({
      next: (data: any) => {
        this.download.download(data, `Documentos vencidos parte ${page}`);
      }})
  }
}
