import { Injectable }                           from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { ConexionService }                      from './conexion.service';
import { HttpClient }                           from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ConexionService {

  private isAuthenticated$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor( private _http: HttpClient ) {
    super(_http);
  }

  getUserRole(): string {
    return localStorage.getItem('role') || 'guest';
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  setAuthStatus(isAuthenticated: boolean) {
    this.isAuthenticated$.next(isAuthenticated);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  validarToken(): Observable<boolean> {
    return of(this.hasToken());
  }

  validarEmpre(): Observable<boolean> {
    const role = localStorage.getItem('role');
    return of(role === 'Empresa' || role === 'Auxiliar');
  }

  validarSecre(): Observable<boolean> {
    const role = localStorage.getItem('role');
    return of(role === 'Secretaria');
  }

  login(cedula: string, password: string) {
    let params = { ciudad: 'SantaMarta' };
    let data = { cedula, password };
    return this.post('/login', data, params);
  }

  logout() {
    return this.getAuth('/logout').pipe(
      tap(() => {
        localStorage.clear();
        this.setAuthStatus(false);
      })
    );
  }

  reset(email: string) {
    let data = { email };
    let params = { ciudad: 'SantaMarta' };
    return this.post('/emailresetpass', data, params);
  }
}
