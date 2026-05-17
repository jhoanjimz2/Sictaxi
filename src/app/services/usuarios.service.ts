import { Injectable } from '@angular/core';
import { ConexionService } from './conexion.service';
import { HttpClient } from '@angular/common/http';
import { ActualizarUsuario, ActualizarUsuarioEmpresa } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService extends ConexionService {

  constructor(private _http: HttpClient) { super(_http); }

  getListUsers() {
    return this.getAuth('/listUsers');
  }
  getDataUser(id: number) {
    let data = { id }
    return this.postAuth('/getProfileUserById', data);
  }
  updateUser(data: ActualizarUsuario) {
    return this.postAuth('/update', data);
  }
  updateUserEmpresa(data: ActualizarUsuario) {
    return this.postAuth('/updateUser', data);
  }
  eliminarUser(id: number) {
    let data = { id }
    return this.postAuth('/deleteUser', data);
  }
  crearUser(data: ActualizarUsuario) {
    return this.postAuth('/register', data);
  }
  getEmpresas() {
    return this.getAuth('/getEmpresas');
  }
}
