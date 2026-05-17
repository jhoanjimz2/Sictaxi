import { Component }                          from '@angular/core';
import { MatDialog }                          from '@angular/material/dialog';
import { FechasVencidas, RespFechasVencidas } from 'src/app/interfaces';
import { FasesExportarComponent }             from 'src/app/modals/fases-exportar/fases-exportar.component';
import { EstadisticasService }                from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-alertas-vencimiento',
  templateUrl: './alertas-vencimiento.component.html',
  styleUrls: ['./alertas-vencimiento.component.scss']
})
export class AlertasVencimientoComponent {

  fechasVencida: FechasVencidas[] = [];
  totalPages: number = 0;
  paginaActual: number = 0;
  buscar: string = '';

  constructor(
    private eS: EstadisticasService,
    private dialog: MatDialog
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getDataDocumentosVencidos(pagina).subscribe({
      next: (data: RespFechasVencidas) => {
        this.totalPages = data.pages;
        this.fechasVencida = data.data;
      }, error: (error: any) => {
        this.totalPages = 0;
        this.fechasVencida = [];
      }
    })
  }
  exportar() {
    const dialogRef = this.dialog.open(FasesExportarComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
  buscando(event: string) {
    this.buscar = event.toUpperCase();
  }

}
