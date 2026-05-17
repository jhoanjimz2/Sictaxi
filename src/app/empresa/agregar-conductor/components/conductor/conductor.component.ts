import { Component, ElementRef, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { Subject, debounceTime } from 'rxjs';
import { RespBusquedaPorCedula } from 'src/app/interfaces';
import { ModalTomarFotoComponent } from 'src/app/modals/modal-tomar-foto/modal-tomar-foto.component';
import { AddConductorService } from 'src/app/services/add-conductor.service';
import { FormsAddConductorService } from 'src/app/services/forms-add-conductor.service';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.scss']
})
export class ConductorComponent {
  @ViewChild('myInput') input!: ElementRef;

  private formsAddConductorService   = inject(FormsAddConductorService);
  private loading                    = inject(LoadingService);
  private dialog                     = inject(MatDialog);
  private aC                         = inject(AddConductorService);

  get form         () { return this.formsAddConductorService._form1       };
  get img          () { return this.formsAddConductorService.img          };
  get id           () { return this.formsAddConductorService.id           };
  get conductor    () { return this.formsAddConductorService.conductor    };
  get conductorBxC () { return this.formsAddConductorService.conductorBxC };

  get EPSs() { return this.aC.EPS };
  get ARLs() { return this.aC.ARL };
  get AFPs() { return this.aC.AFP };

  _debounce: Subject<string> = new Subject();

  @Output() refrendar:EventEmitter<any> = new EventEmitter();

  constructor() {
    this._debounce.pipe(debounceTime(500)).subscribe(value => this.buscarC())
    this.formsAddConductorService.conductor$.subscribe(value => {if (Object.keys(this.conductor).length > 0){ this.cargarDatos() }});
    this.formsAddConductorService.conductorBxC$.subscribe(value => {if (Object.keys(this.conductorBxC).length > 0){ this.rellenar() }});
  }
  debounce() {
    this._debounce.next(this.form.controls['cedula'].value);
  }
  buscarC() {
    this.aC.searchConductorEmpresasByCedula(this.form.controls['cedula'].value).subscribe({
      next: (data: RespBusquedaPorCedula) => {
        if ( data.conductor ) this.formsAddConductorService.conductorBxC = data.conductor;
        else this.formsAddConductorService.conductorBxC = data.actual;
      }
    })
  }

  rellenar() {
    this.form.controls['cedula']                            .setValue(this.conductorBxC.cedula);
    this.form.controls['nombres']                           .setValue(this.conductorBxC.nombres);
    this.form.controls['apellidos']                         .setValue(this.conductorBxC.apellidos);
    this.form.controls['fechaNacimiento']                   .setValue(moment(this.conductorBxC.fechaNacimiento).format('YYYY/MM/DD'));
    this.form.controls['tipoSangre']                        .setValue(this.conductorBxC.tipoSangre);
    this.form.controls['rh']                                .setValue(this.conductorBxC.rh);
    this.form.controls['sexo']                              .setValue(this.conductorBxC.sexo);
    this.form.controls['estadoCivil']                       .setValue(this.conductorBxC.estadoCivil);
    this.form.controls['direccion']                         .setValue(this.conductorBxC.direccion);
    this.form.controls['barrio']                            .setValue(this.conductorBxC.barrio);
    this.form.controls['telefono']                          .setValue(this.conductorBxC.telefono);
    this.form.controls['email']                             .setValue(this.conductorBxC.email);
    this.form.controls['categoriaPase']                     .setValue(this.conductorBxC.categoriaPase);
    this.form.controls['fechaExpedicionLicenciaConduccion'] .setValue(moment(this.conductorBxC.fechaExpedicionLicenciaConduccion).format('YYYY/MM/DD'));
    this.form.controls['fechaLicenciaConduccion']           .setValue(moment(this.conductorBxC.fechaLicenciaConduccion).format('YYYY/MM/DD'));
    this.form.controls['idArl']                             .setValue(this.conductorBxC.idArl);
    this.form.controls['idEps']                             .setValue(this.conductorBxC.idEps);
    this.form.controls['idAfp']                             .setValue(this.conductorBxC.idAfp);
    this.formsAddConductorService.img = environment.apiImg + this.conductorBxC.fotoURL;
  }
  cargarDatos() {
    this.form.controls['cedula']                     .setValue(this.conductor.conductor.cedula);
    this.form.controls['nombres']                    .setValue(this.conductor.conductor.nombres);
    this.form.controls['apellidos']                  .setValue(this.conductor.conductor.apellidos);
    this.form.controls['fechaNacimiento']            .setValue(moment(this.conductor.conductor.fechaNacimiento).format('YYYY/MM/DD'));
    this.form.controls['tipoSangre']                 .setValue(this.conductor.conductor.tipoSangre);
    this.form.controls['rh']                         .setValue(this.conductor.conductor.rh);
    this.form.controls['sexo']                       .setValue(this.conductor.conductor.sexo);
    this.form.controls['estadoCivil']                .setValue(this.conductor.conductor.estadoCivil);
    this.form.controls['direccion']                  .setValue(this.conductor.conductor.direccion);
    this.form.controls['barrio']                     .setValue(this.conductor.conductor.barrio);
    this.form.controls['telefono']                   .setValue(this.conductor.conductor.telefono);
    this.form.controls['email']                      .setValue(this.conductor.conductor.email);
    this.form.controls['categoriaPase']              .setValue(this.conductor.conductor.categoriaPase);
    this.form.controls['fechaExpedicionLicenciaConduccion'] .setValue(moment(this.conductor.conductor.fechaExpedicionLicenciaConduccion).format('YYYY/MM/DD'));
    this.form.controls['fechaLicenciaConduccion']    .setValue(moment(this.conductor.conductor.fechaLicenciaConduccion).format('YYYY/MM/DD'));
    this.form.controls['idArl']                      .setValue(this.conductor.conductor.seguridad_social[0].id);
    this.form.controls['idEps']                      .setValue(this.conductor.conductor.seguridad_social[1].id);
    this.form.controls['idAfp']                      .setValue(this.conductor.conductor.seguridad_social[2].id);
    this.form.controls['jornada']                    .setValue(this.conductor.jornada);
    this.form.controls['consecutivo']                .setValue(this.conductor.consecutivo);
    this.form.controls['fechaUltimaRefrendacion']    .setValue(moment(this.conductor.fechaUltimaRefrendacion).format('YYYY/MM/DD'));
    this.form.controls['cedula']                     .disable();
    this.formsAddConductorService.img = environment.apiImg + this.conductor.conductor.fotoURL;
  }

  // Fotografia
  addimg(event: any) {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) return this.loading.error('Solo se permite subir imagenes');
    if (event.target.files[0].size > 2000000) return this.loading.error('Imagen muy grande para subir');
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.formsAddConductorService.imgsubir = event.target.files[0];
      this.formsAddConductorService.img = reader.result!.toString();
      return;
    }
    this.input.nativeElement.disabled = true;
  }
  abrirImg () {
    this.input.nativeElement.disabled = false;
    this.input.nativeElement.click()
  }
  tomarFoto() {
    const _dialogRef = this.dialog.open(ModalTomarFotoComponent, {});
    _dialogRef.afterClosed().subscribe(result => {
      if (result.html) this.formsAddConductorService.img = result.html.toString();
      if (result.file) this.formsAddConductorService.imgsubir = result.file;
    });
  }


  // Siguiente step
  next() {
    if (this.formsAddConductorService.img == '') this.loading.error('Por favor, sube o captura una foto con la webcam.');
    if (this.id) this.form.controls['cedula'].enable();
    this.formsAddConductorService.formConductor_1 = {
      ...this.form.value,
      fechaLicenciaConduccion:           moment(this.form.controls['fechaLicenciaConduccion'].value).format('DD/MM/YYYY'),
      fechaExpedicionLicenciaConduccion: moment(this.form.controls['fechaExpedicionLicenciaConduccion'].value).format('DD/MM/YYYY'),
      fechaUltimaRefrendacion:           moment(this.form.controls['fechaUltimaRefrendacion'].value).format('DD/MM/YYYY'),
      fechaNacimiento:                   moment(this.form.controls['fechaNacimiento'].value).format('DD/MM/YYYY'),
      foto:                              this.formsAddConductorService.imgsubir
    };
    if (this.id) this.form.controls['cedula'].disable();
    this.formsAddConductorService.step = 2;
    this.formsAddConductorService.formSaved_1 = true;
  }

  _refrendar() {
    this.refrendar.emit();
  }



}
