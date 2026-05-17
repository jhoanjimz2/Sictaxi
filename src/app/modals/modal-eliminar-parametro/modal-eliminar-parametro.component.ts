import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable }                    from 'rxjs';
import { Action }                        from 'src/app/interfaces';
import { EstadisticasService }           from 'src/app/services/estadisticas.service';

interface DialogData {
  id: string | null;
  action: Action
}

@Component({
  selector: 'app-modal-eliminar-parametro',
  templateUrl: './modal-eliminar-parametro.component.html',
  styleUrls: ['./modal-eliminar-parametro.component.scss']
})
export class ModalEliminarParametroComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarParametroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private eS: EstadisticasService
  ) {
  }
  eliminar() {
    let funcion: Observable<any>;
    if( this.data.action == 'MAR' ) funcion = this.eS.eliminarMarca(this.data.id!);
    else if( this.data.action == 'AFP' ) funcion = this.eS.eliminarSeguridadSocial(this.data.id!);
    else if( this.data.action == 'ARL' ) funcion = this.eS.eliminarSeguridadSocial(this.data.id!);
    else if( this.data.action == 'EPS' ) funcion = this.eS.eliminarSeguridadSocial(this.data.id!);
    else if( this.data.action == 'ASE' ) funcion = this.eS.eliminarAseguradora(this.data.id!);
    else return;

    funcion!.subscribe({
      next: () => {
        this.dialogRef.close(true);
      }, error: () => {
        this.dialogRef.close();
      }
    })
  }
}
