import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';
  private _httpClient: HttpClient;
  private router: Router = inject(Router);

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public login(): Observable<string> {
    return this._httpClient
      .post<string>('https://fakestoreapi.com/auth/login', {
        username: 'donero',
        password: 'ewedon',
      })
      .pipe(tap((token) => (this.token = token)));
  }

  public logout(): void {
    this.token = '';
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    return this.token != '';
  }
}
