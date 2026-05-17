import { inject }               from '@angular/core';
import { Router }               from '@angular/router';
import { Observable, of }       from 'rxjs';
import { tap, map }             from 'rxjs/operators';
import { SuscripcionesService } from '../services/suscripciones.service';
import { environment }          from 'src/environments/environment';

export const validarSuscripcionGuard = (): Observable<boolean> => {
  const subscriptionService = inject(SuscripcionesService);
  const router = inject(Router);
  const fechaLimite = new Date(environment.dateLimit);
  const fechaActual = new Date();


  if (fechaActual <= fechaLimite) {
    return of(true);
  }

  return subscriptionService.tieneSuscripcionActiva().pipe(
    tap((tieneSuscripcion) => {
      if (!tieneSuscripcion) {
        router.navigate(['/suscripciones']);
      }
    }),
    map(tieneSuscripcion => tieneSuscripcion)
  );
};
