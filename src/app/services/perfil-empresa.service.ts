import { Injectable }                                 from '@angular/core';
import { ConexionService }                            from './conexion.service';
import { HttpClient }                                 from '@angular/common/http';
import { RespGetPerfilEmpresa, UpdateProfileEmpresa } from '../interfaces';
import { BehaviorSubject, Observable }                from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilEmpresaService  extends ConexionService {

  private profileEmpresa$ = new BehaviorSubject<RespGetPerfilEmpresa>({} as RespGetPerfilEmpresa);

  constructor(private _http: HttpClient) {
    super(_http);
    this.getCompany();
  }

  obtenerProfileEmpresa(): Observable<RespGetPerfilEmpresa> {
    return this.profileEmpresa$.asObservable();
  }

  getCompany() {
    return this.getAuth('/getCompany').subscribe({
      next: (data: RespGetPerfilEmpresa) => {
        this.profileEmpresa$.next(data);
      }
    });
  }

  updateCompanyPhoto(data: UpdateProfileEmpresa) {
    return this.postAuthImg('/updateCompanyPhoto', data);
  }
}
