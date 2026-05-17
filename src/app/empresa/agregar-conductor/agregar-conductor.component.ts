import { Location }                                                                  from '@angular/common';
import { Component, inject }                                                         from '@angular/core';
import { ActivatedRoute }                                                            from '@angular/router';
import { AddCrearConductor, GetConductorIDVinculacion, Refrendaciones, VehiculoBxC } from 'src/app/interfaces';
import { AddConductorService }                                                       from 'src/app/services/add-conductor.service';
import { FormsAddConductorService }                                                  from 'src/app/services/forms-add-conductor.service';
import { LoadingService }                                                            from 'src/app/services/loading.service';
import { ModalPublicidadComponent }                                                  from 'src/app/modals/modal-publicidad/modal-publicidad.component';
import { MatDialog }                                                                 from '@angular/material/dialog';
import { ModalValidacionTelefonicaComponent }                                        from 'src/app/modals/modal-validacion-telefonica/modal-validacion-telefonica.component';
import { checkboxRequiredValidator, checkboxRequiredValidator2 }                     from 'src/app/validators';

@Component({
  selector: 'app-agregar-conductor',
  templateUrl: './agregar-conductor.component.html',
  styleUrls: ['./agregar-conductor.component.scss']
})
export class AgregarConductorComponent {

  private formsAddConductorService = inject(FormsAddConductorService);
  private activatedRoute           = inject(ActivatedRoute);
  private loading                  = inject(LoadingService);
  private location                 = inject(Location);
  private aC                       = inject(AddConductorService);
  private dialog                   = inject(MatDialog);

  get id   ()             { return this.formsAddConductorService.id    };
  get step ()             { return this.formsAddConductorService.step  };
  set step (value:number) { this.formsAddConductorService.step = value;};

  crearConductor: AddCrearConductor = {} as AddCrearConductor;

  constructor() {
    this.formsAddConductorService.initState();
    this.formsAddConductorService.id = this.activatedRoute.snapshot.params['id'];
    if ( this.formsAddConductorService.id ) {
      this.aC.getRefrendaciones(this.id).subscribe({next: (data: Refrendaciones[]) => {this.aC.refrendaciones = data;}})
      this.cargarData();
    }
  }

  cargarData() {
    this.aC.getConductor(this.formsAddConductorService.id).subscribe({
      next: (data: GetConductorIDVinculacion) => {
        this.formsAddConductorService.conductor = data;
      }, error: () => this.location.back()})
  }

  seleccion(value: number) {
    if (value == 1) { this.step = value; }
    if (value == 2) {
      if ( this.formsAddConductorService._form1.valid  && this.formsAddConductorService.formSaved_1  ) this.step = value;
      if ( !this.formsAddConductorService._form1.valid && !this.formsAddConductorService.formSaved_1 ) this.loading.error('Rellena todos los campos y guarda el formulario para pasar al siguiente');
      if ( this.formsAddConductorService._form1.valid  && !this.formsAddConductorService.formSaved_1 ) this.loading.error('Dale click en "Guardar todo" para pasar al siguiente formulario');
    }
    if (value == 3) {
      if ( this.formsAddConductorService._form2.valid  && this.formsAddConductorService.formSaved_2  ) this.step = value;
      if ( !this.formsAddConductorService._form2.valid && !this.formsAddConductorService.formSaved_2 ) this.loading.error('Rellena todos los campos y guarda el formulario para pasar al siguiente');
      if ( this.formsAddConductorService._form2.valid  && !this.formsAddConductorService.formSaved_2 ) this.loading.error('Dale click en "Guardar todo" para pasar al siguiente formulario');
    }
  }
  validacionTelefonica() {
    const dialogRef = this.dialog.open(ModalValidacionTelefonicaComponent, {
      data: {
        fechaUltimaRefrendacion: this.formsAddConductorService.conductor.fechaUltimaRefrendacion,
        idConductor:             this.formsAddConductorService.conductor.id,
        telefono:                this.formsAddConductorService.conductor.conductor.telefono,
        cedula:                  this.formsAddConductorService.conductor.conductor.cedula
      }
    });
    dialogRef.componentInstance.confirmacion.subscribe(() => this.refrendar());
  }

  // publicidad() {
  //   const dialogRef = this.dialog.open(ModalPublicidadComponent, {});
  //   dialogRef.componentInstance.confirmacion.subscribe(() => this.refrendar());
  // }

  refrendar() {
    this.formsAddConductorService._form3.get('acceptTerms')?.clearValidators();
    this.formsAddConductorService._form3.get('acceptPolit')?.clearValidators();
    this.formsAddConductorService._form3.get('acceptTerms')?.updateValueAndValidity();
    this.formsAddConductorService._form3.get('acceptPolit')?.updateValueAndValidity();
    this.formsAddConductorService._form3.updateValueAndValidity();
    if (
      !this.formsAddConductorService._form1.valid ||
      !this.formsAddConductorService._form2.valid ||
      !this.formsAddConductorService._form3.valid
    ) return this.formularioCompleto();

    console.log(this.formsAddConductorService.needUpdateDataSave)
    if (this.formsAddConductorService.needUpdateDataSave) return this.dataGuardada();

    this.aC.refrendar(this.formsAddConductorService.id).subscribe({
      next: (data: any) => {
        this.formsAddConductorService._form3.get('acceptTerms')?.setValidators([checkboxRequiredValidator()]);
        this.formsAddConductorService._form3.get('acceptPolit')?.setValidators([checkboxRequiredValidator2()]);
        this.formsAddConductorService._form3.get('acceptTerms')?.updateValueAndValidity();
        this.formsAddConductorService._form3.get('acceptPolit')?.updateValueAndValidity();
        this.aC.getRefrendaciones(this.id).subscribe({next: (data: Refrendaciones[]) => {this.aC.refrendaciones = data;}})
      }})
  }
  formularioCompleto() {
    this.formsAddConductorService._form3.get('acceptTerms')?.setValidators([checkboxRequiredValidator()]);
    this.formsAddConductorService._form3.get('acceptPolit')?.setValidators([checkboxRequiredValidator2()]);
    this.formsAddConductorService._form3.get('acceptTerms')?.updateValueAndValidity();
    this.formsAddConductorService._form3.get('acceptPolit')?.updateValueAndValidity();
    this.loading.error('Para seguir con la refrendación es necesario que todos los datos esten actualizados, revisa cada formulario antes de seguir')
  }
  dataGuardada() {
    this.formsAddConductorService._form3.get('acceptTerms')?.setValidators([checkboxRequiredValidator()]);
    this.formsAddConductorService._form3.get('acceptPolit')?.setValidators([checkboxRequiredValidator2()]);
    this.formsAddConductorService._form3.get('acceptTerms')?.updateValueAndValidity();
    this.formsAddConductorService._form3.get('acceptPolit')?.updateValueAndValidity();
    this.loading.error("Para seguir con la refrendación es necesario que actualices la información que requiere cada formulario, rellena cada formulario y dale click en 'Guardar Todo'")
  }



}
