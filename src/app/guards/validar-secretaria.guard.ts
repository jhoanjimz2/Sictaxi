import { inject }                from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService }           from '../services/auth.service';
import { map }                   from 'rxjs';

export const validarSecretariaGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.validarSecre().pipe(
    map(valid => {
      if (!valid) {
        router.navigateByUrl('/auth');
        localStorage.clear();
      }
      return valid;
    })
  );
};
