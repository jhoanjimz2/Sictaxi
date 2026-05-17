import { Injectable }                                                                                                                                                                                                  from '@angular/core';
import { ConexionService }                                                                                                                                                                                             from './conexion.service';
import { HttpClient }                                                                                                                                                                                                  from "@angular/common/http";
import { ActualizarPerfilUsuario, CambiarPassword, EmpresaAutorizada, GuardarAsociacion, GuardarEmpresa, ReqConductoresConQuejas, ReqEstadisticaConductores, ReqGrafComentarios, UpdateParametros }                    from '../interfaces';
import { BehaviorSubject }                                                                                                                                                                                             from 'rxjs';

export interface RespAfpArlEps {
  data:    Data;
  message: string;
}

export interface Data {
  EPS: OPTION[];
  ARL: OPTION[];
  AFP: OPTION[];
}

export interface OPTION {
  id:     number;
  nombre: string;
  tipo:   string;
}


@Injectable({
  providedIn: 'root'
})
export class EstadisticasService extends ConexionService {

  _AFPARLEPS = new BehaviorSubject<OPTION[]>([]);
  _selectedEmpresa = new BehaviorSubject<EmpresaAutorizada | null>(null);
  _empresasFiltro = new BehaviorSubject<EmpresaAutorizada[]>([]);

  constructor(private _http: HttpClient) {
    super(_http);

    this.obtenerAFPARLEPS().subscribe({
      next: (data: RespAfpArlEps) => {
        this._AFPARLEPS.next([...data.data.AFP,...data.data.ARL,...data.data.EPS].sort())
      }
    })
  }

  paramsComplete(page: number) {
    return this._selectedEmpresa.value?.id
    ? { ciudad: 'SantaMarta', idEmpresa: this._selectedEmpresa.value.id, page }
    : { ciudad: 'SantaMarta', page };
  }
  paramsSimple() {
    return this._selectedEmpresa.value?.id
    ? { ciudad: 'SantaMarta', idEmpresa: this._selectedEmpresa.value.id }
    : { ciudad: 'SantaMarta' };
  }

  getCards() {
    let params = this.paramsSimple();
    return this.getAuth('/getCardDataSecretaria', params);
  }
  getCardsEmpresas() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuth('/getCardDataEmpresa', params);
  }
  getModelos() {
    let params = this.paramsSimple();
    return this.getAuth('/getGraphModelCar', params);
  }
  getNivelEducativo() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuth('/getGraphTaxistaNivelEducativo', params);
  }
  getNivelEstrato() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuth('/getGraphTaxistaEstrato', params);
  }
  getGraficaComentarios(data: ReqGrafComentarios) {
    return this.postAuth('/getGraphComentariosCalificaciones', data);
  }
  getGraficaCalificaciones(params: { fechaInicial: string, fechaFinal: string }) {
    return this.getAuth('/getGraphCalificaciones',params);
  }
  exportDataGraphCalificacionesGeneral(params: { fechaInicial: string, fechaFinal: string }) {
    return this.getAuthExcel('/exportDataGraphCalificacionesGeneral', params)
  }

  exportDataGraphComentariosNegativos(data: { fechaInicial: string, fechaFinal: string, comentarios: string[] }) {
    return this.postAuthExcel('/exportDataGraphCalificacionesComentariosNegativas', data)
  }
  exportDataGraphComentariosPositivos(data: { fechaInicial: string, fechaFinal: string, comentarios: string[] }) {
    return this.postAuthExcel('/exportDataGraphCalificacionesComentariosPositivas', data)
  }

  getConductoresConQuejas(data: ReqEstadisticaConductores) {
    return this.postAuth('/getEstadisticaConductoresConQuejas', data);
  }
  getConductoresBienCalificados(data: ReqEstadisticaConductores) {
    return this.postAuth('/getEstadisticaConductoresBienCalificados', data);
  }
  getDataQuejas(idVinculacion: number,fechaInicial: string, fechaFinal: string) {
    let params = { idVinculacion, fechaInicial, fechaFinal };
    return this.getAuth('/getDataQuejas', params);
  }
  getDataQuejasTramitadas(idVinculacion: number,fechaInicial: string, fechaFinal: string) {
    let params = { idVinculacion, fechaInicial, fechaFinal };
    return this.getAuth('/getDataQuejasTramitadas', params);
  }
  getDataBuenasCalificaciones(idVinculacion: number,fechaInicial: string, fechaFinal: string) {
    let params = { idVinculacion, fechaInicial, fechaFinal };
    return this.getAuth('/getDataBuenasCalificaciones', params);
  }
  getDataDocumentosVencidos(page: number) {
    let params = { ciudad: 'Santa Marta', page };
    return this.getAuth('/getDataDocumentosVencidos', params);
  }
  getDataDocumentosVencidosEmpresa(page: number) {
    let params = { ciudad: 'Santa Marta', page };
    return this.getAuth('/getDataConductoresDocumentosVencidos', params);
  }
  getDataProximosDocumentosVencidosEmpresa(page: number) {
    let params = { ciudad: 'Santa Marta', page };
    return this.getAuth('/getDataConductoresProximosDocumentosVencidos', params);
  }
  getExcelProximosDocumentoVencerseEmpresa() {
    return this.getAuthExcel('/exportDataProximosDocumentosVencidosConductorEmpresa')
  }
  getExcelDocumentoVencidos(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuthExcel('/exportDocumentoVencidos', params)
  }
  getExcelDocumentoVencidosEmpresa() {
    return this.getAuthExcel('/exportDataDocumentosVencidosConductorEmpresa')
  }
  getConductoresBienCalificadosExcel(params: any) {
    return this.getAuthExcel('/exportDataConductoresBienCalificadosExcel', params)
  }
  getConductoresMalCalificadosExcel(params: any) {
    return this.getAuthExcel('/exportDataConductoresMalCalificadosExcel', params)
  }

















  //EMPRESAS AUTORIZADAS
  getEmpresas() {
    return this.getAuth('/getDataEmpresas');
  }
  getEmpresasAutorizadas(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataEmpresas', params);
  }
  getExcelEmpresasAutorizadas() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportCompaniesExcel', params)
  }
  getEmpresaAutorizada(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/cargarEmpresa', { id }, params);
  }
  guardarEmpresa(data: GuardarEmpresa) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/guardarEmpresa', data, params);
  }
  eliminarEmpresa(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/eliminarEmpresa', { id }, params);
  }
  //EMPRESAS AUTORIZADAS




  //TAXIS REGISTRADOS
  getTaxisRegistrados(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisRegistrados', params);
  }
  getExcelTaxisRegistrados() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportRegisterTaxisExcel', params)
  }
  //TAXIS REGISTRADOS



  //TAXIS SOAT VENCIDO
  getTaxisSoatVencido(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisSoatVencido', params);
  }
  getExcelTaxiSoatVencidoExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportTaxiSoatVencidoExcel', params)
  }
  //TAXIS SOAT VENCIDO



  //TAXIS TECNOMECANICA VENCIDO
  getTaxisTecnomecanicaVencido(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisTecnomecanicaVencida', params);
  }
  getExcelTaxiTecnoecanicaVencidoExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportTaxiTecnoMecanicaVencidoExcel', params)
  }
  //TAXIS TECNOMECANICA VENCIDO


  //TAXIS RCE VENCIDO
  getTaxisRCEVencido(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisRCE', params);
  }
  getExcelTaxiRCEVencidoExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportTaxiRCEVencidoExcel', params)
  }
  //TAXIS TECNOMECANICA VENCIDO


  //TAXIS RCC VENCIDO
  getTaxisRCCVencido(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisRCC', params);
  }
  getExcelTaxiRCCVencidoExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportTaxiRCCVencidoExcel', params)
  }
  //TAXIS TECNOMECANICA VENCIDO



  //TAXIS TARJETA DE OPERACION
  getTaxisTarjetaOperaciónVigente(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisTarjetaOperaciónVigente', params);
  }
  getExcelTaxiTarjetaOperacionVigenteExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportTaxiTarjetaOperacionVigenteExcel', params)
  }
  getTaxisTarjetaOperaciónVencida(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisTarjetaOperaciónVencida', params);
  }
  getExcelTaxiTarjetaOperacionVencidaExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportTaxiTarjetaOperacionVencidaExcel', params)
  }
  //TAXIS TARJETA DE OPERACION



  //TAXIS CHATARRIZADOS
  getTaxisChatarrizados(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataTaxisChatarrizados', params);
  }
  getExcelChatarrizadosTaxiExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportChatarrizadosTaxiExcel', params)
  }
  //TAXIS CHATARRIZADOS



  //ASOCIACIONES
  getAsociaciones(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getDataasociaciones', params);
  }
  getExcelAsociacionesExcel() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportAsociacionesExcel', params)
  }
  getAsociacion(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/cargarAsociacion', { id }, params);
  }
  guardarAsociacion(data: GuardarAsociacion) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/guardarAsociacion', data, params);
  }
  eliminarAsociacion(id: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/eliminarAsociacion', { id }, params);
  }
  //ASOCIACIONES



  //TAXISTAS REGISTRADOS
  getTaxistasRegistrados(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataConductoresRegistrados', params);
  }
  getExcelConductoresRegistradosExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportConductoresRegistradosExcel', params)
  }
  //TAXISTAS REGISTRADOS



  //TAXISTAS SIN LICENCIA
  getTaxistasSinLicencia(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataConductoresSinLicencia', params);
  }
  getExcelConductoresSinLicenciaExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportConductoresSinLicenciaExcel', params)
  }
  //TAXISTAS SIN LICENCIA



  //TAXISTAS SIN REFRENDAR
  getTaxistasSinRefrendar(page: number) {
    let params = this.paramsComplete(page);
    return this.getAuth('/getDataConductoresSinRefrendar', params);
  }
  getExcelConductoresSinRefrendarExcel() {
    let params = this.paramsSimple();
    return this.getAuthExcel('/exportConductoresSinRefrendarExcel', params)
  }
  //TAXISTAS SIN REFRENDAR



  //QUEJAS
  getConductoresConQuejasPaginado(page: number, data: ReqConductoresConQuejas) {
    let params = { page }
    return this.postAuth('/getConductoresConQuejas', data ,params);
  }
  bloquearConductor(id: number) {
    let data = { id }
    return this.postAuth('/vinculacionBloquear', data);
  }
  desbloquearConductor(id: number) {
    let data = { id }
    return this.postAuth('/vinculacionDesbloquear', data);
  }
  tramitarQuejas(id: number) {
    let data = { id }
    return this.postAuth('/processComplaintsVinculacion', data);
  }
  exportConductoresConQuejasExcel(data: { fechaInicial: string, fechaFinal: string, placa: string }) {
    return this.postAuthExcel('/exportConductoresConQuejasExcel', data)
  }
  //QUEJAS

  //PERFIL DE USUARIO
  getPerfilUsuario() {
    return this.getAuth('/getProfileUser');
  }
  editarPerfilUsuario(data: ActualizarPerfilUsuario) {
    return this.postAuth('/updateUser', data);
  }
  cambiarContrasena(data: CambiarPassword) {
    return this.postAuth('/changePassword ', data);
  }
  cambiarContrasenaInit(pass: any) {
    let data = { pass }
    return this.postAuth('/changesolicitarPass', data);
  }
  cambiarImgDePerfil(id: string, image: File) {
    let data = { id, image }
    return this.postAuthImg('/updateProfileUser', data);
  }
  //PERFIL DE USUARIO


  //PARQUE AUTOMOTOR
  getVehiculosGeneral(parametros: any) {
    let params = { ciudad: 'SantaMarta', ...parametros };
    return this.getAuth('/getDataVehiculosGeneral', params);
  }
  cancelarMatricula(placa: string) {
    let data = { placa }
    return this.postAuth('/cancelarMatricula', data);
  }
  getParqueAutomotorExcel() {
    return this.getAuthExcel('/exportParqueAutomotorExcel')
  }
  //PARQUE AUTOMOTOR


  //INCIDENCIAS
  getObservaciones(page: number) {
    let params = { ciudad: 'SantaMarta', page };
    return this.getAuth('/getListObservaciones', params);
  }
  addObservacion(observacion: string) {
    let data = { observacion }
    return this.postAuth('/addObservacion', data);
  }
  //INCIDENCIAS

  //PARAMETROS
  getLoadParameters() {
    return this.getAuth('/loadParameters');
  }
  updateParametros(data: UpdateParametros) {
    return this.postAuth('/updateParameters', data);
  }
  obtenerMarcas() {
    return this.getAuth('/obtenerMarcas');
  }
  nuevaMarca(name: string) {
    let data = { name }
    return this.postAuth('/nuevaMarca', data);
  }
  obtenerAFPARLEPS() {
    return this.getAuth('/getListadoobtenerSeguridadSocial');
  }
  obtenerAseguradoras() {
    return this.getAuth('/obtenerAseguradoras');
  }
  nuevaSeguridadSocial(name: string, type: string) {
    let data = { name, type }
    return this.postAuth('/nuevaSeguridadSocial', data);
  }
  nuevaAseguradora(name: string) {
    let data = { name }
    return this.postAuth('/nuevaAseguradora', data);
  }
  updateAseguradora(nombre: string, id: string) {
    let data = { nombre, id }
    return this.postAuth('/updateAseguradora', data);
  }
  updateSeguridadSocial(nombre: string, id: string) {
    let data = { nombre, id }
    return this.postAuth('/updateSeguridadSocial', data);
  }
  updateMarca(nombre: string, id: string) {
    let data = { nombre, id }
    return this.postAuth('/updateMarca', data);
  }
  eliminarSeguridadSocial(id: string) {
    let data = { id }
    return this.postAuth('/eliminarSeguridadSocial', data);
  }
  eliminarAseguradora(id: string) {
    let data = { id }
    return this.postAuth('/eliminarAseguradora', data);
  }
  eliminarMarca(id: string) {
    let data = { id }
    return this.postAuth('/eliminarMarca', data);
  }
  //PARAMETROS

}
