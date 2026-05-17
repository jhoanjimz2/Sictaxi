import {Component, Inject}               from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConductoresConQuejas }          from 'src/app/interfaces';
import { EstadisticasService }           from 'src/app/services/estadisticas.service';

interface data {
  conductor: ConductoresConQuejas
}

@Component({
  selector: 'app-modal-bloquear-conductor',
  templateUrl: './modal-bloquear-conductor.component.html',
  styleUrls: ['./modal-bloquear-conductor.component.scss']
})
export class ModalBloquearConductorComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalBloquearConductorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: data,
    private eS: EstadisticasService
  ) {}

  bloquear() {
    this.eS.bloquearConductor(this.data.conductor.ultima_vinculacion.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.data.conductor.estado = 'Bloqueada';
      }})
  }

}
