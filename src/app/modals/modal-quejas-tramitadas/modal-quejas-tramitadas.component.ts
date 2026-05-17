import {Component, Inject}               from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Calificacion, Usuario }         from 'src/app/interfaces';
import { EstadisticasService }           from 'src/app/services/estadisticas.service';

export interface DialogData {
  idVinculacion: number;
  fechaInicial: string;
  fechaFinal: string;
}

@Component({
  selector: 'app-modal-quejas-tramitadas',
  templateUrl: './modal-quejas-tramitadas.component.html',
  styleUrls: ['./modal-quejas-tramitadas.component.scss']
})
export class ModalQuejasTramitadasComponent {

  get user(): Usuario {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : {} as Usuario;
  }

  estado: boolean = false;
  quejasNoTramitadas: Calificacion[] = [];
  quejasSiTramitadas: Calificacion[] = [];

  constructor(
    private dialogRef: MatDialogRef<ModalQuejasTramitadasComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private eS: EstadisticasService
  ) {
    this.cargarQuejas();
    this.cargarQuejasTramitadas();
  }

  tramitarTodas() {
    this.eS.tramitarQuejas(this.data.idVinculacion).subscribe({
      next: (data: Calificacion[]) => {
        this.cargarQuejas();
        this.cargarQuejasTramitadas();
      },
      error: (error: any) => {
        this.dialogRef.close();
      }
    })
  }

  cargarQuejas() {
    this.eS.getDataQuejas(this.data.idVinculacion, this.data.fechaInicial, this.data.fechaFinal).subscribe({
      next: (data: Calificacion[]) => {
        this.quejasNoTramitadas = data;
      },
      error: (error: any) => {
        this.dialogRef.close();
      }
    })
  }
  cargarQuejasTramitadas() {
    this.eS.getDataQuejasTramitadas(this.data.idVinculacion, this.data.fechaInicial, this.data.fechaFinal).subscribe({
      next: (data: Calificacion[]) => {
        this.quejasSiTramitadas = data;
      },
      error: (error: any) => {
        this.dialogRef.close();
      }
    })
  }

}
