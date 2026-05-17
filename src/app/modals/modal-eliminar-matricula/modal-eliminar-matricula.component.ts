import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstadisticasService }           from 'src/app/services/estadisticas.service';

export interface DialogData {
  placa: string;
}

@Component({
  selector: 'app-modal-eliminar-matricula',
  templateUrl: './modal-eliminar-matricula.component.html',
  styleUrls: ['./modal-eliminar-matricula.component.scss']
})
export class ModalEliminarMatriculaComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarMatriculaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private eS: EstadisticasService
  ) {}

  eliminar() {
    this.eS.cancelarMatricula(this.data.placa).subscribe({
      next: (data: any) => {
        this.dialogRef.close(true);
      },
      error: (error: any) => {
        this.dialogRef.close(false);
      }
    })
  }
}
