import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpResponse } from '../types/signup-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  //Logic to send signin data to the backend, save the backend returned data and token session
  constructor(private httpClient: HttpClient) {}

  signin(name: string, email: string, password: string) {
    return this.httpClient
      .post<SignUpResponse>('/signup', {
        name,
        email,
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
