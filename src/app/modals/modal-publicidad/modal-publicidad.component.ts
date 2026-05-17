import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-publicidad',
  templateUrl: './modal-publicidad.component.html',
  styleUrls: ['./modal-publicidad.component.scss']
})
export class ModalPublicidadComponent {

  @Output() confirmacion: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private dialogRef: MatDialogRef<ModalPublicidadComponent>,
  ) {
  }

  _rellenar() {
    window.open('https://forms.gle/irzt1gFqUAw6xJ3M7');
  }
  _seguir() {
    this.dialogRef.close();
    this.confirmacion.emit();
  }



}
