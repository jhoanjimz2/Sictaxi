import { Component, Inject, OnInit }                                                    from '@angular/core';
import { FormBuilder, FormControl, FormGroup }                                          from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef }                                                from '@angular/material/dialog';
import * as moment                                                                      from 'moment';
import { DocumentosVencidosService }                                                    from 'src/app/services/documentos-vencidos.service';
import { dateExpiredValidator, datesExpVenValidator, dateValidator, validatorPatterns } from 'src/app/validators';

@Component({
  selector: 'app-modal-actualizar-documentos-vehiculo',
  templateUrl: './modal-actualizar-documentos-vehiculo.component.html',
  styleUrls: ['./modal-actualizar-documentos-vehiculo.component.scss']
})
export class ModalActualizarDocumentosVehiculoComponent implements OnInit {

  formulario: FormGroup = this.fb.group({
    F_E_SOAT: new FormControl(''),
    F_V_SOAT: new FormControl(''),
    N_SOAT: new FormControl(''),

    F_E_TECNOMECANICA: new FormControl(''),
    F_V_TECNOMECANICA: new FormControl(''),
    N_TECNOMECANICA: new FormControl(''),

    F_E_TARJETA_OPERACION: new FormControl(''),
    F_V_TARJETA_OPERACION: new FormControl(''),
    N_TARJETA_OPERACION: new FormControl(''),

    F_V_RCC: new FormControl(''),
    N_RCC: new FormControl(''),

    F_V_RCE: new FormControl(''),
    N_RCE: new FormControl(''),
  });

  page: number;



  constructor(
    private dialog: MatDialogRef<ModalActualizarDocumentosVehiculoComponent>,
    private DVS: DocumentosVencidosService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    let F_E_SOAT = moment(data.fechaExpedicionNumeroSOAT).format('YYYY/MM/DD');
    this.formulario.controls['F_E_SOAT']              .setValue(data.fechaExpedicionNumeroSOAT ? F_E_SOAT : null);
    this.formulario.controls['F_V_SOAT']              .setValue(moment(data.fechas.FechaNumeroSOAT).format('YYYY/MM/DD'));
    this.formulario.controls['N_SOAT']                .setValue(data.fechas.numeroSOAT);

    let F_E_TECNOMECANICA = moment(data.fechaExpedicionNumeroTecnoMecanica).format('YYYY/MM/DD');
    this.formulario.controls['F_E_TECNOMECANICA']     .setValue(data.fechaExpedicionNumeroTecnoMecanica ? F_E_TECNOMECANICA : null);
    this.formulario.controls['F_V_TECNOMECANICA']     .setValue(moment(data.fechas.FechaNumeroTecnomecanica).format('YYYY/MM/DD'));
    this.formulario.controls['N_TECNOMECANICA']       .setValue(data.fechas.numeroTecnoMecanica);

    let F_E_TARJETA_OPERACION = moment(data.fechaTarjetaOperacion).format('YYYY/MM/DD');
    this.formulario.controls['F_E_TARJETA_OPERACION'] .setValue(data.fechaTarjetaOperacion ? F_E_TARJETA_OPERACION : null);
    this.formulario.controls['F_V_TARJETA_OPERACION'] .setValue(moment(data.fechas.fechaTarjetaOperacionF).format('YYYY/MM/DD'));
    this.formulario.controls['N_TARJETA_OPERACION']   .setValue(data.fechas.tarjetaOperacion);

    this.formulario.controls['F_V_RCC']               .setValue(moment(data.fechas.FechaNumeroRCC).format('YYYY/MM/DD'));
    this.formulario.controls['N_RCC']                 .setValue(data.fechas.numeroRCC);

    this.formulario.controls['F_V_RCE']               .setValue(moment(data.fechas.FechaNumeroRCE).format('YYYY/MM/DD'));
    this.formulario.controls['N_RCE']                 .setValue(data.fechas.numeroRCE);

    this.page = data.page;

  }
  ngOnInit() {
    this.activarValidacion();
  }

  close() {
    this.dialog.close();
  }

  activarValidacion() {
    switch (this.data.type) {
      case 'RCC':
        this.formulario.get('F_V_RCC')?.setValidators([dateExpiredValidator()]);
        this.formulario.get('N_RCC')  ?.setValidators([validatorPatterns('^[0-9a-zA-Z]+$')]);
      break;
      case 'RCE':
        this.formulario.get('F_V_RCE')?.setValidators([dateExpiredValidator()]);
        this.formulario.get('N_RCE')  ?.setValidators([validatorPatterns('^[0-9a-zA-Z]+$')]);
      break;
      case 'SOAT':
        this.formulario.get('F_E_SOAT')?.setValidators([dateValidator()]);
        this.formulario.get('F_V_SOAT')?.setValidators([dateExpiredValidator()]);
        this.formulario.get('N_SOAT')  ?.setValidators([validatorPatterns('^[0-9]+$')]);
        this.formulario.setValidators(datesExpVenValidator('F_E_SOAT', 'F_V_SOAT'))
      break;
      case 'TARJETA_OPERACION':
        this.formulario.get('F_E_TARJETA_OPERACION')?.setValidators([dateValidator()]);
        this.formulario.get('F_V_TARJETA_OPERACION')?.setValidators([dateExpiredValidator()]);
        this.formulario.get('N_TARJETA_OPERACION')  ?.setValidators([validatorPatterns('^[0-9a-zA-Z]+$')]);
        this.formulario.setValidators(datesExpVenValidator('F_E_TARJETA_OPERACION', 'F_V_TARJETA_OPERACION'))
      break;
      case 'TECNOMECANICA':
        this.formulario.get('F_E_TECNOMECANICA')?.setValidators([dateValidator()]);
        this.formulario.get('F_V_TECNOMECANICA')?.setValidators([dateExpiredValidator()]);
        this.formulario.get('N_TECNOMECANICA')  ?.setValidators([validatorPatterns('^[0-9a-zA-Z]+$')]);
        this.formulario.setValidators(datesExpVenValidator('F_E_TECNOMECANICA', 'F_V_TECNOMECANICA'))
      break;
    }
    this.formulario.updateValueAndValidity();
    this.formulario.markAllAsTouched();
  }

  actualizar() {
    ;
    let datosActualizados = {};
    switch (this.data.type) {
      case 'RCC':
        datosActualizados = {
          FechaNumeroRCC: moment(this.formulario.controls['F_V_RCC'].value).format('YYYY-MM-DD'),
          numeroRCC:      this.formulario.controls['N_RCC'].value
        }
      break;
      case 'RCE':
        datosActualizados = {
          FechaNumeroRCE: moment(this.formulario.controls['F_V_RCE'].value).format('YYYY-MM-DD'),
          numeroRCE:      this.formulario.controls['N_RCE'].value,
        }
      break;
      case 'SOAT':
        datosActualizados = {
          fechaExpedicionNumeroSOAT: moment(this.formulario.controls['F_E_SOAT'].value).format('YYYY-MM-DD'),
          FechaNumeroSOAT:           moment(this.formulario.controls['F_V_SOAT'].value).format('YYYY-MM-DD'),
          numeroSOAT:                this.formulario.controls['N_SOAT'].value,
        }
      break;
      case 'TARJETA_OPERACION':
        datosActualizados = {
          fechaTarjetaOperacion:  moment(this.formulario.controls['F_E_TARJETA_OPERACION'].value).format('YYYY-MM-DD'),
          fechaTarjetaOperacionF: moment(this.formulario.controls['F_V_TARJETA_OPERACION'].value).format('YYYY-MM-DD'),
          tarjetaOperacion:       this.formulario.controls['N_TARJETA_OPERACION'].value,
        }
      break;
      case 'TECNOMECANICA':
        datosActualizados = {
          fechaExpedicionNumeroTecnoMecanica: moment(this.formulario.controls['F_E_TECNOMECANICA'].value).format('YYYY-MM-DD'),
          FechaNumeroTecnomecanica:           moment(this.formulario.controls['F_V_TECNOMECANICA'].value).format('YYYY-MM-DD'),
          numeroTecnoMecanica:                this.formulario.controls['N_TECNOMECANICA'].value,
        }
      break;
    }
    this.DVS.actualizarFechaVehiculo(this.data.idVehiculo, datosActualizados, this.page).subscribe({
      next: (response: any) => {
        this.dialog.close();
      }});
  }
}
