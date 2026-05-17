import { Location }                                        from '@angular/common';
import { Component }                                       from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog }                                       from '@angular/material/dialog';
import { ActualizarUsuario, RespGetUser, Usuario }         from 'src/app/interfaces';
import { ModalCambiarImgProfileComponent }                 from 'src/app/modals/modal-cambiar-img-profile/modal-cambiar-img-profile.component';
import { ModalCambiarPasswordComponent }                   from 'src/app/modals/modal-cambiar-password/modal-cambiar-password.component';
import { EstadisticasService }                             from 'src/app/services/estadisticas.service';
import { UsuariosService }                                 from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {

  form: FormGroup = this.fb.group({
    cedula: new FormControl('', [Validators.required]),
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    tipoImpresion: new FormControl('', [Validators.required]),
    tipoTarjeton: new FormControl('', [Validators.required])
  });

  get user(): Usuario { return JSON.parse(localStorage.getItem('user')!); }

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private eS: EstadisticasService,
    private location: Location,
    private uS: UsuariosService
  ) {
    this.cargarData();
  }

  cargarData() {
    ;
    this.eS.getPerfilUsuario().subscribe({
      next: (data: RespGetUser) => {
        this.form.controls['cedula'].setValue(data.cedula);
        this.form.controls['nombres'].setValue(data.nombres);
        this.form.controls['apellidos'].setValue(data.apellidos);
        this.form.controls['direccion'].setValue(data.direccion);
        this.form.controls['telefono'].setValue(data.telefono);
        this.form.controls['email'].setValue(data.email);
        this.form.controls['tipoImpresion'].setValue(data.tipoImpresion);
        this.form.controls['tipoTarjeton'].setValue(data.tipoTarjeton);
        this.form.controls['cedula'].disable();
        this.form.controls['email'].disable();
        ;
      },error: () => {
        this.location.back();
      }
    })
  }
  cambiarImg() {
    const dialogRef = this.dialog.open(ModalCambiarImgProfileComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  cambiarPassword() {
    const dialogRef = this.dialog.open(ModalCambiarPasswordComponent, {});
    dialogRef.afterClosed().subscribe(result => {});
  }
  guardar() {
    ;
    let local: Usuario = JSON.parse(localStorage.getItem('user')!);
    this.form.controls['cedula'].enable();
    this.form.controls['email'].enable();
    let data: ActualizarUsuario = { ...this.form.value };
    this.form.controls['cedula'].disable();
    this.form.controls['email'].disable();
    this.uS.updateUserEmpresa(data).subscribe({
      next: (data: RespGetUser) => {
        local.nombres = data.nombres;
        local.apellidos = data.apellidos;
        localStorage.setItem('user', JSON.stringify(local));
        ;
      }})
  }
}
