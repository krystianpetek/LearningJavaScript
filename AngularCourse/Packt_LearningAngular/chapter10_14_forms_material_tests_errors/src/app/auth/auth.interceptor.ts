import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private _authService: AuthService;
  constructor(authService: AuthService) {
    this._authService = authService;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authRequest = request.clone({
      setHeaders: {
        Authorization: 'myAuthToken',
      },
    });
    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Unauthorized) {
          this._authService.logout();
          return EMPTY;
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}
