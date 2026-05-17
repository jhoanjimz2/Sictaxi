import { Component }                        from '@angular/core';
import { MatDialog }                        from '@angular/material/dialog';
import { ModalEliminarAsociacionComponent } from '../../../../modals/modal-eliminar-asociacion/modal-eliminar-asociacion.component';
import { ModalCrearAsociacionComponent }    from '../../../../modals/modal-crear-asociacion/modal-crear-asociacion.component';
import { Asociacion, RespAsociasiones }     from 'src/app/interfaces';
import { EstadisticasService }              from 'src/app/services/estadisticas.service';
import { DownloadService }                  from 'src/app/services/download.service';


@Component({
  selector: 'app-asociaciones',
  templateUrl: './asociaciones.component.html',
  styleUrls: ['./asociaciones.component.scss']
})
export class AsociacionesComponent {
  asociaciones!: Asociacion[];
  totalPages: number = 0;
  paginaActual: number = 0;
  constructor(
    public dialog: MatDialog,
    private eS: EstadisticasService,
    private download: DownloadService
  ) {
    this.pagina({ pagina: 1 });
  }
  pagina({pagina}: any) {
    this.paginaActual = pagina;
    this.eS.getAsociaciones(pagina).subscribe({
      next: (data: RespAsociasiones) => {
        this.totalPages = data.pages;
        this.asociaciones = data.data;
      }})
  }
  exportar() {
    this.eS.getExcelAsociacionesExcel().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Asociaciones');
      }})
  }
  editar(id: number | null) {
    const dialogRef = this.dialog.open(ModalCrearAsociacionComponent, {
      data: { id },
      height: '378.5px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pagina({ pagina: this.paginaActual });
    });
  }
  eliminar(id: number) {
    const dialogRef = this.dialog.open(ModalEliminarAsociacionComponent, {
      data: { id },
      height: '150px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pagina({ pagina: this.paginaActual });
    });
  }
}
