import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../model/auth-response.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<AuthResponse> {
    let payload = { email, password, returnSecureToken: true };
    let signInEndpoint =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

    return this.http.post<AuthResponse>(
      `${signInEndpoint}${environment.firebase.apiKey}`,
      payload
    );
  }

  signup(email: string, password: string): Observable<AuthResponse> {
    let payload = { email, password, returnSecureToken: true };
    let signInEndpoint =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

    return this.http.post<AuthResponse>(
      `${signInEndpoint}${environment.firebase.apiKey}`,
      payload
    );
  }

  formatAuthResponseToUser(data: AuthResponse): User {
    const expiringDate = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );

    const user = new User(data.email, data.idToken, data.localId, expiringDate);
    return user;
  }

  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email not found !';

      case 'INVALID_PASSWORD':
        return 'Password is invalid !';

      case 'EMAIL_EXISTS':
        return 'The email already exists !';
        
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        return 'Too many attempts from this device due to unusual activity. Try again later. !';

      default:
        return 'Unknown error occured, please try again';
    }
  }
}
