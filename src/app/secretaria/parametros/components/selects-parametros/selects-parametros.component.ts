import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action, Aseguradora, LoadParametrosSelects, Marca, Param } from 'src/app/interfaces';
import { ModalCrearParametroComponent } from 'src/app/modals/modal-crear-parametro/modal-crear-parametro.component';
import { ModalEliminarParametroComponent } from 'src/app/modals/modal-eliminar-parametro/modal-eliminar-parametro.component';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-selects-parametros',
  templateUrl: './selects-parametros.component.html',
  styleUrls: ['./selects-parametros.component.scss']
})
export class SelectsParametrosComponent {

  formulario = {
    EPS: '',
    ARL: '',
    AFP: '',
    ASEGURADORA: '',
    MARCA: ''
  }

  marcas: Marca[] = [];
  EPSs: Param[] = [];
  ARLs: Param[] = [];
  AFPs: Param[] = [];
  aseguradoras: Aseguradora[] = [];
  constructor(
    private eS: EstadisticasService,
    private dialog: MatDialog
  ) {
    this.cargarParametros();
  }
  cargarParametros() {
    this.eS.obtenerMarcas().subscribe({
      next: (data: Marca[]) => {
        this.marcas = data;
      }
    })
    this.eS.obtenerAFPARLEPS().subscribe({
      next: (data: LoadParametrosSelects) => {
        this.EPSs = data.data.EPS;
        this.ARLs = data.data.ARL;
        this.AFPs = data.data.AFP;
      }
    })
    this.eS.obtenerAseguradoras().subscribe({
      next: (data: Aseguradora[]) => {
        this.aseguradoras = data;
      }
    })
  }
  get EPS () { return this.EPSs.find(element => element.id == this.formulario.EPS)?.nombre || '' }
  get ARL () { return this.ARLs.find(element => element.id == this.formulario.ARL)?.nombre || '' }
  get AFP () { return this.AFPs.find(element => element.id == this.formulario.AFP)?.nombre || '' }
  get ASEGURADORA () { return this.aseguradoras.find(element => element.id == this.formulario.ASEGURADORA)?.nombre || '' }
  get MARCA () { return this.marcas.find(element => element.id == this.formulario.MARCA)?.marca || '' }

  
  editar(data: { action: Action, id: string | null, texto: string }) {
    const dialogRef = this.dialog.open(ModalCrearParametroComponent, { data, width: '800px'});
    dialogRef.afterClosed().subscribe(result => {
      if ( result ) this.cargarParametros();
    });
  }
  eliminar(data: { action: Action, id: string }) {
    const dialogRef = this.dialog.open(ModalEliminarParametroComponent, { data });
    dialogRef.afterClosed().subscribe(result => {
      if ( result ) this.cargarParametros();
    });
  }
}
