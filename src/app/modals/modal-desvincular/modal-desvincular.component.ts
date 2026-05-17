import { Component, Inject }                               from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef }                   from '@angular/material/dialog';
import { AddConductorService }                             from 'src/app/services/add-conductor.service';
import { DocumentosVencidosService }                       from 'src/app/services/documentos-vencidos.service';

export interface DialogData {
  idVinculacion: number;
  page: number;
  tipo: 'conductor' | 'vehiculo';
  idsSeleccionados: number[];
}
@Component({
  selector: 'app-modal-desvincular',
  templateUrl: './modal-desvincular.component.html',
  styleUrls: ['./modal-desvincular.component.scss']
})
export class ModalDesvincularComponent {
  form: FormGroup = this.fb.group({
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<ModalDesvincularComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private DVS: DocumentosVencidosService,
    private aC: AddConductorService,
    private fb: FormBuilder
  ) {
    console.log('IDs seleccionados:', this.data.tipo);

  }
  desvincular() {
    if (this.data.tipo) this.desvincular1();
    else this.desvincular2()
  }

  desvincular1() {
    this.DVS.desvincular(this.data.idsSeleccionados, this.form.controls['password'].value, this.data.page, this.data.tipo)
      .subscribe({
        next: (data: any) => {
          if (data && data.message === 'update') {
            this.dialogRef.close(true);
          }
        }});
  }

  desvincular2() {
    this.aC.desvincular(this.data.idVinculacion, this.form.controls['password'].value).subscribe({
      next: (data: any) => {
        this.dialogRef.close(true);
      }
    })
  }

}
