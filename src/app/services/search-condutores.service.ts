import { HttpClient }      from '@angular/common/http';
import { Injectable }      from '@angular/core';
import { ConexionService } from './conexion.service';

@Injectable({
  providedIn: 'root'
})
export class SearchCondutoresService extends ConexionService {

  constructor(private _http: HttpClient) { super(_http); }

  getConductoresGeneral(params: any) {
    return this.getAuth('/getDataConductoresGeneral', params);
  }
  getExcelConductoresListadoGeneral() {
    let params = { ciudad: 'SantaMarta' };
    return this.getAuthExcel('/exportConductoresListadoGeneral', params)
  }
  getPerfilConductor(idConductor: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/searchVehiculoConductorByVinculacion', { idConductor } ,params)
  }
  descargarPdfProfile(idConductor: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuthPDF('/fichaConductorPDF', { idConductor } ,params)
  }


  getConductoresGeneralEmpresa(params: any) {
    return this.getAuth('/getDataConductoresGeneralEmpresas', params);
  }
  getPerfilConductorEmpresa(idVinculacion: number) {
    let params = { ciudad: 'SantaMarta' };
    return this.postAuth('/searchVehiculoConductorByVinculacion', { idVinculacion } ,params)
  }
  descargarPdfProfileEmpresa(id: string) {
    return this.postAuth('/exportPdfUser', { id })
  }
  getExcelConductoresListadoGeneralEmpresa(idEmpresa: string, page: number) {
    let params = { idEmpresa, page };
    return this.getAuthExcel('/exportDataConductoresGeneralEmpresasExcel', params)
  }



}
