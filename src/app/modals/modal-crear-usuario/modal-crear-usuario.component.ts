import { Component, Inject }                               from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef }                   from '@angular/material/dialog';
import { Observable }                                      from 'rxjs';
import { ActualizarUsuario, GetEmpresas, RespGetUser }     from 'src/app/interfaces';
import { LoadingService }                                  from 'src/app/services/loading.service';
import { UsuariosService }                                 from 'src/app/services/usuarios.service';

export interface DialogData {
  id: number;
  type: boolean;
}

@Component({
  selector: 'app-modal-crear-usuario',
  templateUrl: './modal-crear-usuario.component.html',
  styleUrls: ['./modal-crear-usuario.component.scss']
})
export class ModalCrearUsuarioComponent {
  form: FormGroup = this.fb.group({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    cedula: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    nueva: new FormControl('', [Validators.required]),
    confirmacion: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required]),
    idEmpresa: new FormControl('', [Validators.required]),
    solicitarCambioclave: new FormControl(false, [Validators.required]),
  });
  empresas: GetEmpresas[] = [];
  constructor(
    private dialogRef: MatDialogRef<ModalCrearUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private loading: LoadingService,
    private uS: UsuariosService,
    private fb: FormBuilder
  ) {
    this.cargarEmpresas();
    if ( data.type ) this.cargarData();
    if ( JSON.parse(localStorage.getItem('user')!).rol != 'Secretaria') {
      this.form.controls['idEmpresa'].setValue(JSON.parse(localStorage.getItem('user')!).idempresa);
      this.form.controls['idEmpresa'].disable();
    }
  }

  cargarEmpresas() {
    this.uS.getEmpresas().subscribe({
      next: (data: GetEmpresas[]) => {
        this.empresas = data;
      }
    })
  }

  cargarData() {
    this.uS.getDataUser(this.data.id).subscribe({
      next: (data: RespGetUser) => {
        this.rellenar(data);
      }, error: () => {
        this.dialogRef.close();
      }
    })
  }

  rellenar(data: RespGetUser) {
    this.form.controls['nombres'].setValue(data.nombres);
    this.form.controls['apellidos'].setValue(data.apellidos);
    this.form.controls['cedula'].setValue(data.cedula);
    this.form.controls['direccion'].setValue(data.direccion);
    this.form.controls['telefono'].setValue(data.telefono);
    this.form.controls['email'].setValue(data.email);
    this.form.controls['rol'].setValue(data.rol);
    this.form.controls['idEmpresa'].setValue(data.idempresa);
    this.form.controls['solicitarCambioclave'].setValue(data.solicitarCambioclave);
    this.form.controls['nueva'].setValue('');
    this.form.controls['confirmacion'].setValue('');
    ;
  }

  guardar() {
    if(this.form.value['password'] != this.form.value['newpassword']) return this.loading.error('Las contraseñas no son iguales');
    if(!this.form.valid) return this.loading.error('Todos los campos son requeridos');
    let data: ActualizarUsuario = { ...this.form.value };
    var servicio: Observable<any>;
    if (this.data.type ) servicio = this.uS.updateUser(data);
    else servicio = this.uS.crearUser(data);
    servicio.subscribe({
      next: (data: RespGetUser) => this.dialogRef.close(true),
      error: () => this.dialogRef.close(false)
    })
  }
}
