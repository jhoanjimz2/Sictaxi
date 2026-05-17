import { Injectable }                                      from '@angular/core';
import { HttpClient }                                      from '@angular/common/http';
import { BehaviorSubject }                                 from 'rxjs';
import { ConexionService }                                 from './conexion.service';
import { AddCrearConductor, Aseguradora, Asociacion2, LoadParametrosSelects, Marca, Param, Refrendaciones } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddConductorService extends ConexionService {

  private _EPSSubject = new BehaviorSubject<Param[]>([]);
  get EPS(): Param[]      { return this._EPSSubject.value; }
  set EPS(value: Param[]) { this._EPSSubject.next(value);  }

  private _ARLSubject = new BehaviorSubject<Param[]>([]);
  get ARL(): Param[]      { return this._ARLSubject.value; }
  set ARL(value: Param[]) { this._ARLSubject.next(value);  }

  private _AFPSubject = new BehaviorSubject<Param[]>([]);
  get AFP(): Param[]      { return this._AFPSubject.value; }
  set AFP(value: Param[]) { this._AFPSubject.next(value);  }

  private _marcasSubject = new BehaviorSubject<Marca[]>([]);
  get marcas(): Marca[]      { return this._marcasSubject.value; }
  set marcas(value: Marca[]) { this._marcasSubject.next(value);  }

  private _aseguradorasSubject = new BehaviorSubject<Aseguradora[]>([]);
  get aseguradoras(): Aseguradora[]      { return this._aseguradorasSubject.value; }
  set aseguradoras(value: Aseguradora[]) { this._aseguradorasSubject.next(value);  }

  private _asociacionesSubject = new BehaviorSubject<Asociacion2[]>([]);
  get asociaciones(): Asociacion2[]      { return this._asociacionesSubject.value; }
  set asociaciones(value: Asociacion2[]) { this._asociacionesSubject.next(value);  }

  private _refrendacionesSubject = new BehaviorSubject<Refrendaciones[]>([]);
  get refrendaciones(): Refrendaciones[]      { return this._refrendacionesSubject.value; }
  set refrendaciones(value: Refrendaciones[]) { this._refrendacionesSubject.next(value);  }

  tipoCombustible = [
    { id: 'Gasolina',  nombre: 'Gasolina',  codigo: 'Gasolina'  },
    { id: 'Gas',       nombre: 'Gas',       codigo: 'Gas'       },
    { id: 'ACPM',      nombre: 'ACPM',      codigo: 'ACPM'      },
    { id: 'Electrico', nombre: 'Electrico', codigo: 'Electrico' }
  ];

  constructor(private _http: HttpClient) {
    super(_http);
    this.obtenerAFPARLEPS   ().subscribe({ next: (data: LoadParametrosSelects) => { this.EPS = data.data.EPS; this.ARL = data.data.ARL; this.AFP = data.data.AFP ;}})
    this.obtenerMarcas      ().subscribe({ next: (data: Marca[]) => this.marcas = data})
    this.obtenerAseguradoras().subscribe({ next: (data: Aseguradora[]) =>this.aseguradoras = data})
    this.obtenerAsociaciones().subscribe({ next: (data: Asociacion2[]) => this.asociaciones = data})
  }

  getConductor(idVinculacion: string) {
    let params = { idVinculacion };
    return this.getAuth('/getDataVinculacionConductor', params);
  }
  validateDriver(cedula: string){
    let data = {cedula};
    return this.postAuthPDF('/validateDriver', data);
  }
  obtenerAFPARLEPS() {
    return this.getAuth('/getListadoobtenerSeguridadSocial');
  }
  obtenerMarcas() {
    return this.getAuth('/obtenerMarcas');
  }
  obtenerAseguradoras() {
    return this.getAuth('/obtenerAseguradoras');
  }
  obtenerAsociaciones() {
    return this.getAuth('/obtenerAsociaciones');
  }
  crearConductor(data: AddCrearConductor) {
    return this.postAuthImg('/addVinculacionConductorVehiculo', data);
  }
  editarConductor(data: AddCrearConductor) {
    return this.postAuthImg('/addConductorVehiculo', data);
  }
  getRefrendaciones(idVinculacion: string) {
    let data = { idVinculacion }
    return this.postAuth('/getRefrendaciones ', data);
  }
  enviarSMS(idConductor: number, telefono: string) {
    let data = { idConductor, telefono};
    return this.postAuthPDF('/sendSMS', data);
  }
  validarSMS(idConductor: number, telefono: string, otp_code: string) {
    let data = { idConductor, telefono, otp_code };
    return this.postAuthPDF('/validateSms', data);
  }
  refrendar(idVinculacion: string) {
    let data = { idVinculacion }
    return this.postAuth('/refrendar ', data);
  }
  desvincular(idVinculacion: number, clave: string) {
    let data = { idVinculacion, clave }
    return this.postAuth('/desvincular ', data);
  }
  searchConductorEmpresasByCedula(cedula: string) {
    let data = { cedula }
    return this.postAuth('/searchConductorEmpresasByCedula', data);
  }
  searchVehiculoEmpresasByPlaca(placa: string) {
    let data = { placa }
    return this.postAuth('/searchVehiculoEmpresasByPlaca', data);
  }
}
