import { Component, Inject }             from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuariosService }               from 'src/app/services/usuarios.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-modal-eliminar-usuario',
  templateUrl: './modal-eliminar-usuario.component.html',
  styleUrls: ['./modal-eliminar-usuario.component.scss']
})
export class ModalEliminarUsuarioComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalEliminarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private uS: UsuariosService
  ) {}


  eliminar() {
    this.uS.eliminarUser(this.data.id).subscribe({
      next: () => {
        this.dialogRef.close(true)
      }, error: () => {
        this.dialogRef.close(false);
      }
    })
  }
}
