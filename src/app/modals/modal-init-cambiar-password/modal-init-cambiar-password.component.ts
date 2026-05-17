import { Component, inject }                               from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef }                                    from '@angular/material/dialog';
import { Usuario }                                         from 'src/app/interfaces';
import { EstadisticasService }                             from 'src/app/services/estadisticas.service';
import { LoadingService }                                  from 'src/app/services/loading.service';

@Component({
  selector: 'app-modal-init-cambiar-password',
  templateUrl: './modal-init-cambiar-password.component.html',
  styleUrls: ['./modal-init-cambiar-password.component.scss']
})
export class ModalInitCambiarPasswordComponent {

  private dialogRef = inject(MatDialogRef<ModalInitCambiarPasswordComponent>);
  private loading = inject(LoadingService);
  private eS = inject(EstadisticasService);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    nueva: new FormControl('', [Validators.required]),
    confirmacion: new FormControl('', [Validators.required]),
  });
  guardar() {
    if(this.form.controls['nueva'].value != this.form.controls['confirmacion'].value) {
      return this.loading.error('Las contraseñas no son iguales');
    }
    let local: Usuario = JSON.parse(localStorage.getItem('user')!);
    let data = {
      Nuevapass: this.form.controls['nueva'].value,
      Confirmpass: this.form.controls['confirmacion'].value
    }
    this.eS.cambiarContrasenaInit(data).subscribe({
      next: (data: any) => {
        this.dialogRef.close();
        local.solicitarCambioclave = null;
        localStorage.setItem('user', JSON.stringify(local));
      }})
  }
}
