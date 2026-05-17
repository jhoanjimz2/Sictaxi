import { Component }                                       from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog }                                       from '@angular/material/dialog';
import { Alertas, RespAlertas }                            from 'src/app/interfaces/alertas';
import { ModalConfirmAlertComponent }                      from 'src/app/modals/modal-confirm-alert/modal-confirm-alert.component';
import { EstadisticasService }                             from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.scss']
})
export class IncidenciasComponent {

  form: FormGroup = this.fb.group({
    observacion: new FormControl('', [Validators.required]),
  });
  totalPages: number = 1;
  paginaActual: number = 1;
  alertas: Alertas[] = [];

  constructor(
    private fb: FormBuilder,
    private eS: EstadisticasService,
    private dialog: MatDialog
  ) { this.pagina({ pagina: 1 }); }

  pagina({pagina}: any) {
    ;
    this.paginaActual = pagina;
    this.eS.getObservaciones(pagina).subscribe({
      next: (data: RespAlertas) => {
        this.alertas = data.data;
        this.totalPages = data.pages;
        ;
      }, error: (error: any) => {
        this.totalPages = 1;
        this.alertas = [];
      }
    })
  }

  guardar() {
    this.eS.addObservacion(this.form.controls['observacion'].value).subscribe({
      next: () => {
        this.form.reset();
        this.pagina({ pagina: 1 });
      }})
  }

  confirm() {
    const dialogRef = this.dialog.open(ModalConfirmAlertComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if( result ) {
        this.guardar();
      }
    });
  }
}
