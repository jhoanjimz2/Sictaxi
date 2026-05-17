import { Component, OnInit, Inject }  from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DocumentosVencidosService }  from 'src/app/services/documentos-vencidos.service';
import { ModalDesvincularComponent }  from '../modal-desvincular/modal-desvincular.component';

@Component({
  selector: 'app-modal-desvinculacion-multiple',
  templateUrl: './modal-desvinculacion-multiple.component.html',
  styleUrls: ['./modal-desvinculacion-multiple.component.scss'],
})
export class ModalDesvinculacionMultipleComponent implements OnInit {
  asociados: any[] = [];
  parametro: string = '';
  tipoConsulta: 'placa' | 'cedula' = 'placa';
  idVinculacion: number = 0;

  constructor(
    private DVS: DocumentosVencidosService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data.tipo === 'vehiculo' && this.data.placa) {
      this.tipoConsulta = 'placa';
      this.parametro = this.data.placa;
    } else if (this.data.tipo === 'conductor' && this.data.cedula) {
      this.tipoConsulta = 'cedula';
      this.parametro = this.data.cedula;
    }
    this.cargarAsociados();
  }

  cargarAsociados(): void {
    ;
    this.DVS.obtenerAsociados(this.tipoConsulta, this.parametro).subscribe({
      next: (respuesta) => {
        this.asociados = respuesta.data;
        ;
      },
      error: (error) => console.error('Error al cargar los asociados', error),
    });
  }

  get idsSeleccionados() {
    return this.asociados.filter((asociado) => asociado.seleccionado).map((asociado) => asociado.id);
  }

  openModalDesvincular() {
    const idsSeleccionados = this.idsSeleccionados;
    const idsParaEnviar = [this.data.idVinculacion, ...idsSeleccionados];

    const modalRef = this.dialog.open(ModalDesvincularComponent, {
      closeOnNavigation: false,
      disableClose: true,
      data: { idsSeleccionados, page: this.data.page, tipo: this.data.tipo, placa: this.data.placa
      }
    });

    modalRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialog.closeAll();
      }
    });
  }

  seleccionarTodo(): void {
    this.asociados.forEach((asociado) => (asociado.seleccionado = true));
  }
  borrarSeleccion(): void {
    this.asociados.forEach((asociado) => (asociado.seleccionado = false));
  }

}
