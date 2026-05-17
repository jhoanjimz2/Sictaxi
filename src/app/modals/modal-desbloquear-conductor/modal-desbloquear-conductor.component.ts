import {Component, Inject}               from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConductoresConQuejas }          from 'src/app/interfaces';
import { EstadisticasService }           from 'src/app/services/estadisticas.service';

interface data {
  conductor: ConductoresConQuejas
}

@Component({
  selector: 'app-modal-desbloquear-conductor',
  templateUrl: './modal-desbloquear-conductor.component.html',
  styleUrls: ['./modal-desbloquear-conductor.component.scss']
})
export class ModalDesbloquearConductorComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalDesbloquearConductorComponent>,
    @Inject(MAT_DIALOG_DATA) private data: data,
    private eS: EstadisticasService
  ) {}

  desbloquear() {
    this.eS.desbloquearConductor(this.data.conductor.ultima_vinculacion.id).subscribe({
      next: () => {
        this.dialogRef.close();
        this.data.conductor.estado = 'Activa';
      }})
  }


}
