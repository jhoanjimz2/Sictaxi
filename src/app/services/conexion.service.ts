import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private readonly api: string = environment.api;
  apipdf: string = 'https://apiqa.sictaxi.gov.co/api';

  constructor(private http: HttpClient) {}

  get(ruta: string, fromObject?: any) {
    let params = new HttpParams({ fromObject });
    return this.http.get(this.api + ruta, { params }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getAuth(ruta: string, fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.get(this.api + ruta, { headers, params }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  getAuthExcel(ruta: string, fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.get(this.api + ruta, { headers, params, responseType: 'blob' as 'json' }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  post(ruta: string, data?: any ,fromObject?: any) {
    let params = new HttpParams({ fromObject });
    return this.http.post(this.api + ruta, data,{ params }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  postAuth(ruta: string, data?: any ,fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.post(this.api + ruta, data, { headers, params }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  postAuthImg(ruta: string, data?: any ,fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.post(this.api + ruta, this.convertidorFormData2(data), { headers, params }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  postAuthExcel(ruta: string, data?: any ,fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.post(this.api + ruta, data, { headers, params, responseType: 'blob' as 'json'  }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  postAuthPDF(ruta: string, data?: any, fromObject?: any) {
    let params = new HttpParams({ fromObject });
    let headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('token')}` });
    return this.http.post(this.apipdf + ruta, data, { headers, params }).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  convertidorFormData2(data:any) {
    const fd = new FormData();
    Object.keys(data).forEach( (key) => {
      if (Array.isArray(data[key])) {
        data[key].forEach( (object: any, index: any) => {
          if (object) {
            if (
              Object.keys(object).length == 0 ||
              !data ||
              typeof data !== "object"
            ) {
              fd.append(key + "[" + index + "]", object);
            } else {
              Object.keys(object).forEach( (key_object) => {
                fd.append(
                  key + "[" + index + "][" + key_object + "]",
                  object[key_object]
                );
              });
            }
          }
        });
      } else {
        fd.append(key, data[key]);
      }
    });
    return fd;
  }

}
