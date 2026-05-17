import { Component }                                       from '@angular/core';
import { MatDialog }                                       from '@angular/material/dialog';
import { ModalCambiarPasswordComponent }                   from '../../modals/modal-cambiar-password/modal-cambiar-password.component';
import { EstadisticasService }                             from 'src/app/services/estadisticas.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActualizarPerfilUsuario, RespGetUser, Usuario }   from 'src/app/interfaces';
import { Location }                                        from '@angular/common';
import { ModalCambiarImgProfileComponent }                 from 'src/app/modals/modal-cambiar-img-profile/modal-cambiar-img-profile.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {
  form: FormGroup = this.fb.group({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    cedula: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  data: ActualizarPerfilUsuario = {} as ActualizarPerfilUsuario;
  get user(): Usuario { return JSON.parse(localStorage.getItem('user')!); }
  constructor(
    private dialog: MatDialog,
    private eS: EstadisticasService,
    private fb: FormBuilder,
    private location: Location
  ) {
    this.cargarData();
  }
  cambiarImg() {
    const dialogRef = this.dialog.open(ModalCambiarImgProfileComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }

  cambiarPassword() {
    const dialogRef = this.dialog.open(ModalCambiarPasswordComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }

  cargarData() {
    this.eS.getPerfilUsuario().subscribe({
      next: (data: RespGetUser) => {
        this.data.tipoImpresion = data.tipoImpresion;
        this.data.tipoTarjeton  = data.tipoTarjeton;
        this.form.controls['nombres'].setValue(data.nombres);
        this.form.controls['apellidos'].setValue(data.apellidos);
        this.form.controls['cedula'].setValue(data.cedula);
        this.form.controls['direccion'].setValue(data.direccion);
        this.form.controls['telefono'].setValue(data.telefono);
        this.form.controls['email'].setValue(data.email);
      },error: () => {
        this.location.back();
      }
    })
  }

  guardar() {
    this.data.nombres = this.form.controls['nombres'].value;
    this.data.apellidos = this.form.controls['apellidos'].value;
    this.data.cedula = this.form.controls['cedula'].value;
    this.data.direccion = this.form.controls['direccion'].value;
    this.data.telefono = this.form.controls['telefono'].value;
    this.data.email = this.form.controls['email'].value;
    let local: Usuario = JSON.parse(localStorage.getItem('user')!);
    this.eS.editarPerfilUsuario(this.data).subscribe({
      next: () => {
        local.nombres = this.data.nombres;
        local.apellidos = this.data.apellidos;
        localStorage.setItem('user', JSON.stringify(local));
      }})
  }

}
