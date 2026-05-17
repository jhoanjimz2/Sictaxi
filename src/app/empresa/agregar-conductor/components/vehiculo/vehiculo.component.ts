import { Component, EventEmitter, inject, Output }                                 from '@angular/core';
import { MatDialog }                                                               from '@angular/material/dialog';
import { ActivatedRoute, Router }                                                  from '@angular/router';
import * as moment                                                                 from 'moment';
import { Subject, catchError, debounceTime, of }                                   from 'rxjs';
import { RespBusquedaPorPlaca }                                                    from 'src/app/interfaces';
import { ModalTerminosPoliticasComponent }                                         from 'src/app/modals/modal-terminos-politicas/modal-terminos-politicas.component';
import { AddConductorService }                                                     from 'src/app/services/add-conductor.service';
import { FormsAddConductorService }                                                from 'src/app/services/forms-add-conductor.service';
import { ModalsService }                                                           from '../../../../services/modals.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent {

  private formsAddConductorService   = inject(FormsAddConductorService);
  private activatedRoute           = inject(ActivatedRoute);

  private aC                         = inject(AddConductorService);
  private dialog                     = inject(MatDialog);
  private router                     = inject(Router);
  private modalsService              = inject(ModalsService);

  private idVinculacion: number | null = null

  get form            () { return this.formsAddConductorService._form3       };
  get id              () { return this.formsAddConductorService.id           };
  get conductor       () { return this.formsAddConductorService.conductor    };
  get vehiculoBxC     () { return this.formsAddConductorService.vehiculoBxC  };
  get aseguradoras    () { return this.aC.aseguradoras                       };
  get tipoCombustible () { return this.aC.tipoCombustible                    };
  get marcas          () { return this.aC.marcas                             };
  get asociaciones    () { return this.aC.asociaciones                       };

  @Output() refrendar: EventEmitter<any> = new EventEmitter();
  @Output() saveForm: EventEmitter<any> = new EventEmitter();

  _debounce: Subject<string> = new Subject();

  constructor() {
    this.idVinculacion = this.activatedRoute.snapshot.params['id'];
    this.formsAddConductorService.conductor$.subscribe(value => {if (Object.keys(this.conductor).length > 0){ this.cargarDatos() }});
    this.formsAddConductorService.vehiculoBxC$.subscribe(value => {if (Object.keys(this.vehiculoBxC).length > 0){ this.rellenar() }});
    this._debounce.pipe(debounceTime(500)).subscribe(valor => this.buscarV())
  }

  buscarV() {
    this.aC.searchVehiculoEmpresasByPlaca(this.form.controls['placa'].value).subscribe({
      next: (data: RespBusquedaPorPlaca) => {
        this.formsAddConductorService.vehiculoBxC = data.actual;
      }
    })
  }
  debounce() {
    this._debounce.next(this.form.controls['placa'].value);
  }

  rellenar() {
    this.form.controls['placa']                             .setValue(this.vehiculoBxC.placa);
    this.form.controls['idMarca']                           .setValue(this.vehiculoBxC.idMarca);
    this.form.controls['cedulaPropietario']                 .setValue(this.vehiculoBxC.cedulaPropietario);
    this.form.controls['modelo']                            .setValue(this.vehiculoBxC.modelo);
    this.form.controls['nombrePropietario']                 .setValue(this.vehiculoBxC.nombrePropietario);
    this.form.controls['direccionPropietario']              .setValue(this.vehiculoBxC.direccionPropietario);
    this.form.controls['telefonoPropietario']               .setValue(this.vehiculoBxC.telefonoPropietario);
    this.form.controls['numeroMotor']                       .setValue(this.vehiculoBxC.numeroMotor);
    this.form.controls['numeroChasis']                      .setValue(this.vehiculoBxC.numeroChasis);
    this.form.controls['tarjetaOperacion']                  .setValue(this.vehiculoBxC.tarjetaOperacion);

    this.form.controls['fechaTarjetaOperacion']             .setValue(moment(this.vehiculoBxC.fechaTarjetaOperacion).format('YYYY/MM/DD'));
    this.form.controls['fechaTarjetaOperacionF']            .setValue(moment(this.vehiculoBxC.fechaTarjetaOperacionF).format('YYYY/MM/DD'));

    this.form.controls['numeroRCC']                         .setValue(this.vehiculoBxC.numeroRCC);
    this.form.controls['numeroRCE']                         .setValue(this.vehiculoBxC.numeroRCE);
    this.form.controls['numeroSOAT']                        .setValue(this.vehiculoBxC.numeroSOAT);
    this.form.controls['numeroTecnoMecanica']               .setValue(this.vehiculoBxC.numeroTecnoMecanica);
    this.form.controls['fechaNumeroRCC']                    .setValue(moment(this.vehiculoBxC.fechaNumeroRCC).format('YYYY/MM/DD'));
    this.form.controls['fechaNumeroRCE']                    .setValue(moment(this.vehiculoBxC.fechaNumeroRCE).format('YYYY/MM/DD'));

    this.form.controls['fechaExpedicionNumeroSOAT']         .setValue(moment(this.vehiculoBxC.fechaExpedicionNumeroSOAT).format('YYYY/MM/DD'));
    this.form.controls['fechaNumeroSOAT']                   .setValue(moment(this.vehiculoBxC.fechaNumeroSOAT).format('YYYY/MM/DD'));

    this.form.controls['fechaExpedicionNumeroTecnoMecanica'].setValue(moment(this.vehiculoBxC.fechaExpedicionNumeroTecnoMecanica).format('YYYY/MM/DD'));
    this.form.controls['fechaNumeroTecnoMecanica']          .setValue(moment(this.vehiculoBxC.fechaNumeroTecnoMecanica).format('YYYY/MM/DD'));

    this.form.controls['idAseguradora']                     .setValue(this.vehiculoBxC.idAseguradora);
    this.form.controls['idAsociacion']                      .setValue(this.vehiculoBxC.idAsociacion);
    this.form.controls['idMatricula']                       .setValue(this.vehiculoBxC.idMatricula);
    this.form.controls['tipoCombustible']                   .setValue(this.vehiculoBxC.tipoCombustible);

    this.form.controls['acceptTerms']                       .setValue(false);
    this.form.controls['acceptPolit']                       .setValue(false);
  }
  cargarDatos() {
    this.form.controls['placa']                    .setValue(this.conductor.vehiculo.placa);
    this.form.controls['idMarca']                  .setValue(this.conductor.vehiculo.idMarca);
    this.form.controls['modelo']                   .setValue(this.conductor.vehiculo.modelo);
    this.form.controls['cedulaPropietario']        .setValue(this.conductor.vehiculo.cedulaPropietario);
    this.form.controls['nombrePropietario']        .setValue(this.conductor.vehiculo.nombrePropietario);
    this.form.controls['direccionPropietario']     .setValue(this.conductor.vehiculo.direccionPropietario);
    this.form.controls['telefonoPropietario']      .setValue(this.conductor.vehiculo.telefonoPropietario);
    this.form.controls['numeroMotor']              .setValue(this.conductor.vehiculo.numeroMotor);
    this.form.controls['numeroChasis']             .setValue(this.conductor.vehiculo.numeroChasis);
    this.form.controls['tarjetaOperacion']         .setValue(this.conductor.vehiculo.tarjetaOperacion);

    this.form.controls['fechaTarjetaOperacion']    .setValue(moment(this.conductor.vehiculo.fechaTarjetaOperacion).format('YYYY/MM/DD'));
    this.form.controls['fechaTarjetaOperacionF']   .setValue(moment(this.conductor.vehiculo.fechaTarjetaOperacionF).format('YYYY/MM/DD'));

    this.form.controls['numeroRCC']                .setValue(this.conductor.vehiculo.numeroRCC);
    this.form.controls['numeroRCE']                .setValue(this.conductor.vehiculo.numeroRCE);
    this.form.controls['numeroSOAT']               .setValue(this.conductor.vehiculo.numeroSOAT);
    this.form.controls['numeroTecnoMecanica']      .setValue(this.conductor.vehiculo.numeroTecnoMecanica);
    this.form.controls['fechaNumeroRCC']           .setValue(moment(this.conductor.vehiculo.fechaNumeroRCC).format('YYYY/MM/DD'));
    this.form.controls['fechaNumeroRCE']           .setValue(moment(this.conductor.vehiculo.fechaNumeroRCE).format('YYYY/MM/DD'));

    this.form.controls['fechaExpedicionNumeroSOAT'].setValue(moment(this.conductor.vehiculo.fechaExpedicionNumeroSOAT).format('YYYY/MM/DD'));
    this.form.controls['fechaNumeroSOAT']          .setValue(moment(this.conductor.vehiculo.fechaNumeroSOAT).format('YYYY/MM/DD'));

    this.form.controls['fechaExpedicionNumeroTecnoMecanica'].setValue(moment(this.conductor.vehiculo.fechaExpedicionNumeroTecnoMecanica).format('YYYY/MM/DD'));
    this.form.controls['fechaNumeroTecnoMecanica'] .setValue(moment(this.conductor.vehiculo.fechaNumeroTecnoMecanica).format('YYYY/MM/DD'));

    this.form.controls['idAseguradora']            .setValue(this.conductor.vehiculo.idAseguradora);
    this.form.controls['idAsociacion']             .setValue(this.conductor.vehiculo.idAsociacion);
    this.form.controls['idMatricula']              .setValue(this.conductor.vehiculo.idMatricula);
    this.form.controls['tipoCombustible']          .setValue(this.conductor.vehiculo.tipoCombustible);

    if (
      this.formsAddConductorService._form1.invalid ||
      this.formsAddConductorService._form1.invalid ||
      this.formsAddConductorService._form1.invalid
    ) {
      this.formsAddConductorService.needUpdateDataSave = true;
    }
    this.form.controls['acceptTerms']              .setValue(false);
    this.form.controls['acceptPolit']              .setValue(false);
  }

  _refrendar() {
    this.refrendar.emit();
  }


  _guardar() {
    this.formsAddConductorService.formConductor_3 = {
      ...this.form.value,
      fechaExpedicionNumeroTecnoMecanica:  moment(this.form.controls['fechaExpedicionNumeroTecnoMecanica'].value).format('DD/MM/YYYY'),
      fechaNumeroTecnoMecanica:            moment(this.form.controls['fechaNumeroTecnoMecanica'].value).format('DD/MM/YYYY'),
      fechaTarjetaOperacionF:              moment(this.form.controls['fechaTarjetaOperacionF'].value).format('DD/MM/YYYY'),
      fechaTarjetaOperacion:               moment(this.form.controls['fechaTarjetaOperacion'].value).format('DD/MM/YYYY'),
      fechaNumeroSOAT:                     moment(this.form.controls['fechaNumeroSOAT'].value).format('DD/MM/YYYY'),
      fechaExpedicionNumeroSOAT:           moment(this.form.controls['fechaExpedicionNumeroSOAT'].value).format('DD/MM/YYYY'),
      fechaNumeroRCC:                      moment(this.form.controls['fechaNumeroRCC'].value).format('DD/MM/YYYY'),
      fechaNumeroRCE:                      moment(this.form.controls['fechaNumeroRCE'].value).format('DD/MM/YYYY'),
    };
    if ( this.formsAddConductorService.id ) this.editar();
    else this.nuevo();
  }

  nuevo() {
    let crearConductor = {
      ...this.formsAddConductorService.formConductor_1,
      ...this.formsAddConductorService.formConductor_2,
      ...this.formsAddConductorService.formConductor_3,
      consecutivo        : this.formsAddConductorService.conductor?.consecutivo? this.formsAddConductorService.conductor.consecutivo : undefined,
      comparendosVigentes: undefined,
      clase              : undefined,
      capacidad          : undefined,
    }
    this.aC.crearConductor(crearConductor).subscribe({
      next: (data: any) => {
        if ( data.status ){
          this.formsAddConductorService.formSaved_3 = true;
          this.router.navigateByUrl('/empresa/buscar-conductores');
        }
      }})
  }

  editar() {
    let crearConductor = {
      ...this.formsAddConductorService.formConductor_1,
      ...this.formsAddConductorService.formConductor_2,
      ...this.formsAddConductorService.formConductor_3,
      consecutivo        : this.formsAddConductorService.conductor?.consecutivo? this.formsAddConductorService.conductor.consecutivo : undefined,
      comparendosVigentes: undefined,
      clase              : undefined,
      capacidad          : undefined,
    }
    this.aC.editarConductor(crearConductor).subscribe({
      next: (data: any) => {
        this.modalsService.llamarTodosLosServiciosVinculación(this.idVinculacion!).pipe(
          catchError(error => {
            return of([]);
          })
        ).subscribe({
          next: () => this.procesarExito(),
          error: (err) => console.error("Error en el subscribe:", err),
        });
      }
    });
  }

  procesarExito() {
    this.formsAddConductorService.formSaved_3 = true;

    if (this.formsAddConductorService.needUpdateDataSave) {
      this.formsAddConductorService.needUpdateDataSave = false;
      return;
    }

    this.router.navigateByUrl('/empresa/buscar-conductores');
  }

  terminos(section:string) {
    const dialogRef = this.dialog.open(ModalTerminosPoliticasComponent, {
      disableClose: true,
      data: {section}
    });
  }

}
