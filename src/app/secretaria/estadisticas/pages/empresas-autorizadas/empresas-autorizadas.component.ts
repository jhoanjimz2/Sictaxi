import { Component }                                  from '@angular/core';
import { MatDialog }                                  from '@angular/material/dialog';
import { ModalEliminarEmpresaComponent }              from '../../../../modals/modal-eliminar-empresa/modal-eliminar-empresa.component';
import { ModalCrearEmpresaComponent }                 from '../../../../modals/modal-crear-empresa/modal-crear-empresa.component';
import { EstadisticasService }                        from 'src/app/services/estadisticas.service';
import { EmpresaAutorizada, RespEmpresasAutorizadas } from 'src/app/interfaces';
import { DownloadService }                            from 'src/app/services/download.service';

@Component({
  selector: 'app-empresas-autorizadas',
  templateUrl: './empresas-autorizadas.component.html',
  styleUrls: ['./empresas-autorizadas.component.scss']
})
export class EmpresasAutorizadasComponent {
  empresas!: EmpresaAutorizada[];
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
    this.eS.getEmpresasAutorizadas(pagina).subscribe({
      next: (data: RespEmpresasAutorizadas) => {
        this.totalPages = data.pages;
        this.empresas = data.data;
        ;
      }})
  }
  exportar() {
    this.eS.getExcelEmpresasAutorizadas().subscribe({
      next: (data: any) => {
        this.download.download(data, 'Empresas Autorizadas');
      }})
  }
  editar(id: number | null) {
    const dialogRef = this.dialog.open(ModalCrearEmpresaComponent, {
      data: { id },
      height: '378.5px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pagina({ pagina: this.paginaActual });
    });
  }
  eliminar(id: number) {
    const dialogRef = this.dialog.open(ModalEliminarEmpresaComponent, {
      data: { id },
      height: '150px',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.pagina({ pagina: this.paginaActual });
    });
  }
}
