import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA }           from '@angular/material/dialog';
import { AddConductorService }                     from 'src/app/services/add-conductor.service';
import { LoadingService }                          from 'src/app/services/loading.service';

@Component({
  selector: 'app-modal-validacion-telefonica',
  templateUrl: './modal-validacion-telefonica.component.html',
  styleUrls: ['./modal-validacion-telefonica.component.scss']
})
export class ModalValidacionTelefonicaComponent {
  codigo: string[] = ['', '', '', '', '', ''];
  mostrarFormulario: boolean = false;
  nuevoNumeroVisible: boolean = false;
  registrarNumero: boolean = false;
  isLoading: boolean = true;
  nuevoNumero!: string;
  telefono_verified!: number;

  @Output() confirmacion: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private aC: AddConductorService,
    private loading: LoadingService,

    public dialogRef: MatDialogRef<ModalValidacionTelefonicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      fechaUltimaRefrendacion: Date,
      idConductor: number,
      telefono: string,
      cedula: string
    }
  ) {}

  ngOnInit() {
    this.obtenerTelefonoVerified();
  }

  obtenerTelefonoVerified() {
    this.aC.validateDriver(this.data.cedula).subscribe(
      response => {
        this.telefono_verified = response.data.telefono_verified;
        this.mostrarFormulario = this.telefono_verified === 0;
        this.isLoading = false;
      });
  }

  isCodigoValido(): boolean {
    return this.codigo.every(num => num !== '');
  }
  isNuevoNumeroValido(): boolean {
    return /^[0-9]{10}$/.test(this.nuevoNumero);
  }
  onNuevoNumeroChange(event: any) {
    const input = event.target;
    let value = input.value;
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    this.nuevoNumero = value;
  }

  validarSMS() {
    const codigoCompleto = this.codigo.join('');
    this.aC.validarSMS(this.data.idConductor, this.data.telefono, codigoCompleto).subscribe(
      async response => {
        const result = await this.loading.confirm('Validación exitosa. ¿Desea continuar con la refrendación?');
        if (result.isConfirmed) {
          this.confirmacion.emit();
        }
        this.dialogRef.close();
      });
  }
  enviarSMS(telefono: string) {
    const data = { idConductor: this.data.idConductor, telefono: telefono };
    this.aC.enviarSMS(this.data.idConductor, telefono).subscribe(
      response => {
        const codigo = response.data.otp_code;
      });
  }
  enviarSMSConTelefonoExistente() {
    this.mostrarFormulario = true;
    this.enviarSMS(this.data.telefono);
  }
  enviarSMSConNuevoNumero() {
    if (this.nuevoNumero) {
      this.enviarSMS(this.nuevoNumero);
      this.mostrarFormulario = true;
      this.nuevoNumeroVisible = false;
    } else {
      console.error('El nuevo número de teléfono no puede estar vacío');
    }
  }
  registrarNuevoNumero() {
    this.registrarNumero = false;
    this.nuevoNumeroVisible = true;
  }

  linkChanges() {
    this.mostrarFormulario = false;
    this.nuevoNumeroVisible = false;
    this.registrarNumero = true;
  }

  cancelar() {
    this.dialogRef.close();
  }

  onInputChange(event: any, index: number) {
    const input = event.target;
    if (input.value.length >= 1 && index < this.codigo.length - 1) {
      const nextInput = input.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  refrendar() {
    this.confirmacion.emit();
    this.dialogRef.close();
  }


}
