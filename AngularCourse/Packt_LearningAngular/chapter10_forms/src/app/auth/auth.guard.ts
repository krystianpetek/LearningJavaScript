import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn | CanMatchFn = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.isLoggedIn) return true;

  return router.parseUrl('/');
};
