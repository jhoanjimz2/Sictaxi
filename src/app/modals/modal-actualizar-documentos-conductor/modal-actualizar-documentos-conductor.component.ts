import { Component, Inject, OnInit }                                 from '@angular/core';
import { FormBuilder, FormControl, FormGroup }                       from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA }                             from '@angular/material/dialog';
import * as moment                                                   from 'moment';
import { DocumentosVencidosService }                                 from 'src/app/services/documentos-vencidos.service';
import { dateExpiredValidator, datesExpVenValidator, dateValidator } from 'src/app/validators';

@Component({
  selector: 'app-modal-actualizar-documentos-conductor',
  templateUrl: './modal-actualizar-documentos-conductor.component.html',
  styleUrls: ['./modal-actualizar-documentos-conductor.component.scss']
})
export class ModalActualizarDocumentosConductorComponent implements OnInit {


  formulario: FormGroup = this.fb.group({
    F_E_LICENCIA_CONDUCCION: new FormControl(''),
    F_V_LICENCIA_CONDUCCION: new FormControl(''),
  });

  page: number;
  conductor_id: number;

  constructor(
    private dialog: MatDialogRef<ModalActualizarDocumentosConductorComponent>,
    private DVS: DocumentosVencidosService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let F_E_LICENCIA_CONDUCCION = moment(data.fechaExpedicionLicenciaConduccion).format('YYYY/MM/DD');
    this.formulario.controls['F_E_LICENCIA_CONDUCCION'].setValue(data.fechaExpedicionLicenciaConduccion ? F_E_LICENCIA_CONDUCCION : null);
    this.formulario.controls['F_V_LICENCIA_CONDUCCION'].setValue(moment(data.fechaLicenciaConduccion).format('YYYY/MM/DD'));
    this.page = data.page;
    this.conductor_id = data.conductor_id;
  }
  ngOnInit() {
    this.formulario.get('F_E_LICENCIA_CONDUCCION')?.setValidators([dateValidator()]);
    this.formulario.get('F_V_LICENCIA_CONDUCCION')?.setValidators([dateExpiredValidator()]);
    this.formulario.setValidators(datesExpVenValidator('F_E_LICENCIA_CONDUCCION', 'F_V_LICENCIA_CONDUCCION'))
    this.formulario.markAllAsTouched();
  }

  close() {
    this.dialog.close();
  }

  actualizar() {
    let data = {
      fechaLicenciaConduccion:           moment( this.formulario.controls['F_V_LICENCIA_CONDUCCION'].value ).format('YYYY-MM-DD'),
      fechaExpedicionLicenciaConduccion: moment( this.formulario.controls['F_E_LICENCIA_CONDUCCION'].value ).format('YYYY-MM-DD')
    }
    this.DVS.actualizarFechaConductor(this.conductor_id, data, this.page).subscribe({
      next: (response: any) => {
        this.dialog.close();
      }});
  }
}
