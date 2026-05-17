import { Component }                                       from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef }                                    from '@angular/material/dialog';
import { CambiarPassword }                                 from 'src/app/interfaces';
import { EstadisticasService }                             from 'src/app/services/estadisticas.service';
import { LoadingService }                                  from 'src/app/services/loading.service';

@Component({
  selector: 'app-modal-cambiar-password',
  templateUrl: './modal-cambiar-password.component.html',
  styleUrls: ['./modal-cambiar-password.component.scss']
})
export class ModalCambiarPasswordComponent {

  form: FormGroup = this.fb.group({
    nueva: new FormControl('', [Validators.required]),
    actual: new FormControl('', [Validators.required]),
    confirmacion: new FormControl('', [Validators.required]),
  });
  constructor(
    private dialogRef: MatDialogRef<ModalCambiarPasswordComponent>,
    private loading: LoadingService,
    private eS: EstadisticasService,
    private fb: FormBuilder
  ) {
  }
  guardar() {
    if(this.form.controls['nueva'].value != this.form.controls['confirmacion'].value) {
      return this.loading.error('Las contraseñas no son iguales');
    }
    let data: CambiarPassword = {} as CambiarPassword;
    data.nueva = this.form.controls['nueva'].value;
    data.actual = this.form.controls['actual'].value;
    data.confirmacion = this.form.controls['confirmacion'].value;
    this.eS.cambiarContrasena(data).subscribe({
      next: (data: any) => {
        this.dialogRef.close()
      }
    })
  }

}
