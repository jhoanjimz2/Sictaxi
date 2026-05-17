import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstadisticasService }           from 'src/app/services/estadisticas.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-modal-eliminar-asociacion',
  templateUrl: './modal-eliminar-asociacion.component.html',
  styleUrls: ['./modal-eliminar-asociacion.component.scss']
})
export class ModalEliminarAsociacionComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarAsociacionComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private eS: EstadisticasService
  ) {}
  eliminar() {
    this.eS.eliminarAsociacion(this.data.id).subscribe({
      next: (data: any) => {
        this.dialogRef.close();
      }})
  }
}
