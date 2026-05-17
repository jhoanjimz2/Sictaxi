import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-alert-actualizacion',
  templateUrl: './modal-alert-actualizacion.component.html',
  styleUrls: ['./modal-alert-actualizacion.component.scss']
})
export class ModalAlertActualizacionComponent {

  private dialogRef = inject(MatDialogRef<ModalAlertActualizacionComponent>)

  closeDialog() {
    this.dialogRef.close();
  }
}
