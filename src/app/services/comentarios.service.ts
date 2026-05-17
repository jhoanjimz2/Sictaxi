import { Injectable }      from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient }      from '@angular/common/http';
import { RespComentarios } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService extends ConexionService {


  private _comentariosP!: RespComentarios[];
  get comentariosP(): RespComentarios[] { return this._comentariosP; }
  set comentariosP(value: RespComentarios[]) { this._comentariosP = value; }

  private _comentariosN!: RespComentarios[];
  get comentariosN(): RespComentarios[] { return this._comentariosN; }
  set comentariosN(value: RespComentarios[]) { this._comentariosN = value; }

  constructor( private _http: HttpClient ) {
    super(_http);
    this.cargarComentarios();
  }
  getComentariosPos() {
    let params = { ciudad: 'SantaMarta', negative: 0, language: 'ES' };
    this.getAuth('/getCommentsByType', params).subscribe({
      next: (data: RespComentarios[]) => { this.comentariosP = data;},
      error: (error: any) => {}
    })
  }
  getComentariosNeg() {
    let params = { ciudad: 'SantaMarta', negative: 1, language: 'ES' };
    this.getAuth('/getCommentsByType', params).subscribe({
      next: (data: RespComentarios[]) => { this.comentariosN = data;},
      error: (error: any) => {}
    })
  }
  cargarComentarios() {
    this.getComentariosPos();
    this.getComentariosNeg();
  }

}
