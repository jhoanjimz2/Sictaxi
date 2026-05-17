import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataDesvinculacion } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DesvinculacionesService extends ConexionService {

  private desvinculacionesData = new BehaviorSubject<DataDesvinculacion[]>([]);
  desvinculacionesData$ = this.desvinculacionesData.asObservable();

  constructor( private _http: HttpClient ) {
    super(_http);
  }


  ListadoDesvinculaciones(params:any): Observable<any> {
    return this.getAuth('/vinculaciones/history', params);
  }

  getExcelDesvinculaciones(){
    return this.getAuthExcel('/vinculaciones/excel-desvinculaciones');
  }


}
