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
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';

    return this.http.post<AuthResponse>(
      `${signInEndpoint}?key=${environment.firebase.apiKey}`,
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
}
