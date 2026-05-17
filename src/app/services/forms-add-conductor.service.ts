import { inject, Injectable }                                                                                                                                                                                                                           from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators }                                                                                                                                                                                              from '@angular/forms';
import { ConductorBxC, FormAddConductor1, FormAddConductor2, FormAddConductor3, GetConductorIDVinculacion, VehiculoBxC }                                                                                                                                from '../interfaces';
import { checkboxRequiredValidator, checkboxRequiredValidator2, endDateValidator, numeroEnteroValidator, placaValidator, requiredAndEmailValidator, requiredValidator, validFecha, validFechaActualMayor, validFechaActualMenor, validFechaNacimiento } from '../validators';
import { BehaviorSubject }                                                                                                                                                                                                                              from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsAddConductorService {

  private fb = inject(FormBuilder);

  private _stepSubject = new BehaviorSubject<number>(1);
  get step(): number      { return this._stepSubject.value; }
  set step(value: number) { this._stepSubject.next(value);  }

  private _imgSubject = new BehaviorSubject<string>('');
  get img(): string      { return this._imgSubject.value; }
  set img(value: string) { this._imgSubject.next(value);  }

  private _imgsubirSubject = new BehaviorSubject<File| null>(null);
  get imgsubir(): File | null        { return this._imgsubirSubject.value; }
  set imgsubir(value: File | null)   { this._imgsubirSubject.next(value);  }

  private _idSubject = new BehaviorSubject<string>('');
  get id(): string        { return this._idSubject.value; }
  set id(value: string)   { this._idSubject.next(value);  }
  get id$() { return this._idSubject.asObservable(); }

  private _conductorSubject = new BehaviorSubject<GetConductorIDVinculacion>({} as GetConductorIDVinculacion);
  get conductor(): GetConductorIDVinculacion        { return this._conductorSubject.value; }
  set conductor(value: GetConductorIDVinculacion)   { this._conductorSubject.next(value);  }
  get conductor$() { return this._conductorSubject.asObservable(); }

  private _conductorBxCSubject = new BehaviorSubject<ConductorBxC>({} as ConductorBxC);
  get conductorBxC(): ConductorBxC        { return this._conductorBxCSubject.value; }
  set conductorBxC(value: ConductorBxC)   { this._conductorBxCSubject.next(value);  }
  get conductorBxC$() { return this._conductorBxCSubject.asObservable(); }

  private _vehiculoBxCSubject = new BehaviorSubject<VehiculoBxC>({} as VehiculoBxC);
  get vehiculoBxC(): VehiculoBxC        { return this._vehiculoBxCSubject.value; }
  set vehiculoBxC(value: VehiculoBxC)   { this._vehiculoBxCSubject.next(value);  }
  get vehiculoBxC$() { return this._vehiculoBxCSubject.asObservable(); }

  formConductor_1: FormAddConductor1 = {} as FormAddConductor1;
  formConductor_2: FormAddConductor2 = {} as FormAddConductor2;
  formConductor_3: FormAddConductor3 = {} as FormAddConductor3;

  formSaved_1: boolean = false;
  formSaved_2: boolean = false;
  formSaved_3: boolean = false;

  needUpdateDataSave : boolean = false;

  _form1: FormGroup = this.fb.group({
    cedula:                            new FormControl('', [requiredValidator()]),
    nombres:                           new FormControl('', [requiredValidator()]),
    apellidos:                         new FormControl('', [requiredValidator()]),
    fechaNacimiento:                   new FormControl('', [validFechaNacimiento()]),
    tipoSangre:                        new FormControl('', [requiredValidator()]),
    rh:                                new FormControl('', [requiredValidator()]),
    sexo:                              new FormControl('', [requiredValidator()]),
    estadoCivil:                       new FormControl('', [requiredValidator()]),
    direccion:                         new FormControl('', [requiredValidator()]),
    barrio:                            new FormControl('', [requiredValidator()]),
    telefono:                          new FormControl('', [requiredValidator()]),
    email:                             new FormControl('', [requiredAndEmailValidator()]),
    categoriaPase:                     new FormControl('', [requiredValidator()]),
    fechaExpedicionLicenciaConduccion: new FormControl('', [validFecha()]),
    fechaLicenciaConduccion:           new FormControl('', [validFechaActualMayor()]),
    idAfp:                             new FormControl('', [requiredValidator()]),
    idArl:                             new FormControl('', [requiredValidator()]),
    idEps:                             new FormControl('', [requiredValidator()]),
    jornada:                           new FormControl('', [requiredValidator()]),
    consecutivo:                       new FormControl({value:'', disabled: true}),
    fechaUltimaRefrendacion:           new FormControl({value:'', disabled: true}),
  });

  _form2: FormGroup = this.fb.group({
    parentescoJefeHogar:     new FormControl('', [requiredValidator()]),
    numeroHijos:             new FormControl('', [requiredValidator()]),
    personasCargo:           new FormControl('', [requiredValidator()]),
    nivelEducativoAlcanzado: new FormControl('', [requiredValidator()]),
    estudia:                 new FormControl('', [requiredValidator()]),
    tipoDiscapacidad:        new FormControl('', [requiredValidator()]),
    taxistaOcacional:        new FormControl('', [requiredValidator()]),
    tiempoComoConductor:     new FormControl('', [numeroEnteroValidator()]),
    conductorLaborUnidad:    new FormControl('', [requiredValidator()]),
    ingresosAproxConductor:  new FormControl('', [requiredValidator()]),
    otraLabor:               new FormControl('', [requiredValidator()]),
    ingresosOtraLabor:       new FormControl(''),
    tiempoOtraLabor:         new FormControl(''),
    otraLaborUnidad:         new FormControl(''),
    estratoSocioEconomico:   new FormControl('', [requiredValidator()]),
    tipoVivienda:            new FormControl('', [requiredValidator()]),
    luz:                     new FormControl('', [requiredValidator()]),
    agua:                    new FormControl('', [requiredValidator()]),
    gas:                     new FormControl('', [requiredValidator()]),
    alcantarillado:          new FormControl('', [requiredValidator()]),
    recoleccionBasura:       new FormControl('', [requiredValidator()]),
  });

  _form3: FormGroup = this.fb.group({
    placa:                    new FormControl('', [placaValidator()]),
    idMarca:                  new FormControl('', [requiredValidator()]),
    modelo:                   new FormControl('', [requiredValidator()]),
    cedulaPropietario:        new FormControl('', [requiredValidator()]),
    nombrePropietario:        new FormControl('', [requiredValidator()]),
    direccionPropietario:     new FormControl('', [requiredValidator()]),
    telefonoPropietario:      new FormControl('', [requiredValidator()]),
    numeroMotor:              new FormControl('', [requiredValidator()]),
    numeroChasis:             new FormControl('', [requiredValidator()]),
    tarjetaOperacion:         new FormControl('', [requiredValidator()]),

    fechaTarjetaOperacion:    new FormControl('', [validFechaActualMenor()]),
    fechaTarjetaOperacionF:   new FormControl('', [requiredValidator()]),

    fechaNumeroRCC:           new FormControl('', [validFecha()]),
    fechaNumeroRCE:           new FormControl('', [validFecha()]),

    fechaExpedicionNumeroSOAT:new FormControl('', [validFechaActualMenor()]),
    fechaNumeroSOAT:          new FormControl('', [validFecha()]),

    fechaExpedicionNumeroTecnoMecanica:new FormControl('', [validFechaActualMenor()]),
    fechaNumeroTecnoMecanica: new FormControl('', [validFecha()]),

    numeroRCC:                new FormControl('', [requiredValidator()]),
    numeroRCE:                new FormControl('', [requiredValidator()]),
    numeroSOAT:               new FormControl('', [requiredValidator()]),
    numeroTecnoMecanica:      new FormControl('', [requiredValidator()]),
    idAseguradora:            new FormControl('', [requiredValidator()]),
    idAsociacion:             new FormControl('', [requiredValidator()]),
    idMatricula:              new FormControl('', [requiredValidator()]),
    tipoCombustible:          new FormControl('', [requiredValidator()]),

    acceptTerms:              new FormControl(false, [checkboxRequiredValidator()]),
    acceptPolit:              new FormControl(false, [checkboxRequiredValidator2()]),
  },{
    validators: [
      endDateValidator('fechaTarjetaOperacion', 'fechaTarjetaOperacionF'),
      endDateValidator('fechaExpedicionNumeroSOAT', 'fechaNumeroSOAT'),
      endDateValidator('fechaExpedicionNumeroTecnoMecanica', 'fechaNumeroTecnoMecanica')
    ]
  });

  initState() {
    this.step     = 1;
    this.id       = '';
    this.img      = '';
    this.imgsubir = null;
    this._form1.reset();
    this._form2.reset();
    this._form3.reset();
    this._form1.controls['cedula'].enable();
    this.conductor       = {} as GetConductorIDVinculacion;
    this.conductorBxC    = {} as ConductorBxC;
    this.vehiculoBxC     = {} as VehiculoBxC;
    this.formConductor_1 = {} as FormAddConductor1;
    this.formConductor_2 = {} as FormAddConductor2;
    this.formConductor_3 = {} as FormAddConductor3;
    this.formSaved_1 = false;
    this.formSaved_2 = false;
  }


}
