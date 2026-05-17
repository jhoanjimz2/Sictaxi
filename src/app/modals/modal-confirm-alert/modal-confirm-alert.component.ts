import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirm-alert',
  templateUrl: './modal-confirm-alert.component.html',
  styleUrls: ['./modal-confirm-alert.component.scss']
})
export class ModalConfirmAlertComponent {

  constructor(private dialogRef: MatDialogRef<ModalConfirmAlertComponent>) {}
  enviar() { this.dialogRef.close(true); }
  noenviar() { this.dialogRef.close(false); }

}
