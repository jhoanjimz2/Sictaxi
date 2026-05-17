import { inject, Injectable }                                     from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError }                                 from 'rxjs';
import { catchError, finalize, tap }                              from 'rxjs/operators';
import { Router }                                                 from '@angular/router';
import { LoadingService }                                         from './loading.service';
import { environment }                                            from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  private router = inject(Router);
  private loading = inject(LoadingService);
  fechaLimite = new Date(environment.dateLimit);
  fechaActual = new Date();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loading.show();
    const token = this.getToken();

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(req).pipe(
      tap(event => {
        // if (event instanceof HttpResponse) {
        //   const message = event.body?.message || 'Operación exitosa';
        //   this.loading.exito(message);
        // }
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.handleUnauthorized();
        } else {
          this.handleError(err);
        }
        return throwError(() => err);
      }),
      finalize(() => {
        this.loading.hide();
      })
    );
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  private handleUnauthorized(): void {
    this.clearToken();
    this.router.navigateByUrl('/auth');
  }

  private handleError(err: HttpErrorResponse): void {
    this.loading.error(err.error?.message || err.error?.error || 'Ocurrió un error inesperado');
    if (err.status === 403) {
      if (this.fechaActual <= this.fechaLimite) return;
      this.router.navigateByUrl('/suscripciones/planes');
    }
  }

  private clearToken(): void {
    localStorage.clear();
  }
}
