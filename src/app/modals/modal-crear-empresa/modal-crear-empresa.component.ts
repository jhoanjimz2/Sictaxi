import { Component, Inject }                               from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef }                   from '@angular/material/dialog';
import { GuardarEmpresa, RespEmpresaAutorizada }           from 'src/app/interfaces';
import { EstadisticasService }                             from 'src/app/services/estadisticas.service';

export interface DialogData {
  id: number | null;
}


@Component({
  selector: 'app-modal-crear-empresa',
  templateUrl: './modal-crear-empresa.component.html',
  styleUrls: ['./modal-crear-empresa.component.scss']
})
export class ModalCrearEmpresaComponent {
  form: FormGroup = this.fb.group({
    nit: new FormControl('', [Validators.required]),
    razon: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    representante: new FormControl('', [Validators.required]),
  });
  constructor(
    private dialogRef: MatDialogRef<ModalCrearEmpresaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private eS: EstadisticasService,
  ) {
    if ( !data.id ) return;
    this.cargarInfo();
  }
  cargarInfo() {
    this.eS.getEmpresaAutorizada(this.data.id!).subscribe({
      next: (data: RespEmpresaAutorizada) => {
        this.form.controls['nit'].setValue(data.nit);
        this.form.controls['razon'].setValue(data.razonSocial);
        this.form.controls['direccion'].setValue(data.direccion);
        this.form.controls['telefono'].setValue(data.telefono);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['representante'].setValue(data.nombreRepresentante);
      },
      error: (error: any) => {
        this.dialogRef.close();
      }
    })
  }
  guardar() {
    if (this.form.invalid) return this.form.markAllAsTouched();
    let guard: GuardarEmpresa = {} as GuardarEmpresa;
    guard.id                  = this.data.id;
    guard.nit                 = this.form.controls['nit'].value;
    guard.email               = this.form.controls['email'].value;
    guard.telefono            = this.form.controls['telefono'].value;
    guard.direccion           = this.form.controls['direccion'].value;
    guard.razonSocial         = this.form.controls['razon'].value;
    guard.nombreRepresentante = this.form.controls['representante'].value;
    this.eS.guardarEmpresa(guard).subscribe({
      next: (data: any) => this.dialogRef.close()})
  }
}

