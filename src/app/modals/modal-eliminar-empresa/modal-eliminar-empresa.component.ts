import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EstadisticasService }           from 'src/app/services/estadisticas.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-modal-eliminar-empresa',
  templateUrl: './modal-eliminar-empresa.component.html',
  styleUrls: ['./modal-eliminar-empresa.component.scss']
})
export class ModalEliminarEmpresaComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private eS: EstadisticasService
  ) {}
  eliminar() {
    ;
    this.eS.eliminarEmpresa(this.data.id).subscribe({
      next: (data: any) => {
        this.dialogRef.close();
      }})
  }
}
