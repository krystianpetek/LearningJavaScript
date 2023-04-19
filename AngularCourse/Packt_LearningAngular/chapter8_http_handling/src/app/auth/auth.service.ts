import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public login(): Observable<string> {
    return this._httpClient
      .post<string>('https://fakestoreapi.com/auth/login', {
        username: 'kpetek',
        password: '3478*#54',
      })
      .pipe(tap((token) => (this.token = token)));
  }

  public logout(): void {
    this.token = '';
  }

  get isLoggedIn(): boolean {
    return this.token != '';
  }
}
