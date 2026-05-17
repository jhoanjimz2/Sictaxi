import { Injectable }                      from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ConexionService }                 from './conexion.service';
import { HttpClient }                      from '@angular/common/http';
import { environment }                     from 'src/environments/environment';
import * as CryptoJS                       from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class SuscripcionesService extends ConexionService {

  private secretKey = environment.keyEncriptJS;

  constructor( private _http: HttpClient ) {
    super(_http);
  }

  getPlanes(): Observable<any> {
    return this.getAuth('/subcription/plan')
  }

  tieneSuscripcionActiva(): Observable<boolean> {
    return this.getAuth('/subcription/subscribe').pipe(
      map(response => response?.data?.status === 'ACTIVE'),
      catchError(() => of(false))
    );
  }

  getMyPlan(): Observable<any> {
    return this.getAuth('/subcription/subscribe')
  }

  iniciarPago(
    { name, price, frequency, payer_email }:
    { name:string, price: number, frequency: 1 | 12, payer_email: string }
  ): Observable<any> {
    const safeParams = this.encryptData({ amount: price });
    let data = {
      name,
      price,
      frequency,
      payer_email,
      back_url: `https://www.sictaxi.gov.co/pagos/exitoso/${safeParams}`
      // back_url: `https://sictaxi.netlify.app/pagos/exitoso/${safeParams}`
    }
    return this.postAuth('/mercadopago/suscribe', data)
  }

  suscripcion(
    { plan_uuid, type, transaction_id }:
    { plan_uuid:string, type: string, transaction_id: string }
  ): Observable<any> {
    let data = {
      plan_uuid,
      type,
      transaction_id
    }
    return this.postAuth('/subcription/subscribe', data)
  }


  encryptData(data: any): string {
    try {
      const encryptedText = CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
      return encodeURIComponent(encryptedText);
    } catch (error) {
      return '';
    }
  }

  decryptData(encryptedText: string): any {
    try {
      const decodedText = decodeURIComponent(encryptedText);

      const bytes = CryptoJS.AES.decrypt(decodedText, this.secretKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      return JSON.parse(decryptedData);
    } catch (error) {
      return null;
    }
  }




}
