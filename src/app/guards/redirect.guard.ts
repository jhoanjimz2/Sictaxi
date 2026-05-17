import { inject }                from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService }           from '../services/auth.service';
import { map }                   from 'rxjs';

export const redirectGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getAuthStatus().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigateByUrl('/auth');
        return false;
      }

      const role = localStorage.getItem('role');

      if (role === 'Empresa' || role === 'Auxiliar') {
        router.navigateByUrl('/empresa');
      } else if (role === 'Secretaria') {
        router.navigateByUrl('/secretaria');
      } else {
        router.navigateByUrl('/auth');
      }

      return false;
    })
  );
};
