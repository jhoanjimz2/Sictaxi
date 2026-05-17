import { inject }                from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService }           from '../services/auth.service';
import { map }                   from 'rxjs';

export const validarNoTokenGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.validarToken().pipe(
    map(valid => {
      if (valid) {
        const userRole = authService.getUserRole();
        const routeByRole = getRouteByRole(userRole);
        router.navigateByUrl(routeByRole);
        return false;
      }
      return true;
    })
  );
};


function getRouteByRole(role: string): string {
  switch (role) {
    case 'Empresa': return '/empresa';
    case 'Auxiliar': return '/empresa';
    case 'Secretaria': return '/secretaria';
    default: return '/auth';
  }
}
