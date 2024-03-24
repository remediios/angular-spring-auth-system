import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInResponse } from '../types/signin-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  //Logic to send signin data to the backend, save the backend returned data and token session
  constructor(private httpClient: HttpClient) {}

  signin(name: string, password: string) {
    return this.httpClient
      .post<SignInResponse>('/signin', {
        name,
        password,
      })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('auth-token', value.token);
          sessionStorage.setItem('username', value.name);
        })
      );
  }
}
