import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-XLqS_i603VfwKVA-JH1lC9bRw1ZC3fo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          let errorMessage = 'An unknown error occurred!';
          if (!error.error || !error.error.error) {
            return throwError(() => errorMessage);
          }
          switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email already exists!';
              break;
            default:
              errorMessage = 'An error occurred!';
          }

          return throwError(() => errorMessage);
        })
      );
  }
}
