import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LocalStorageKeys as lk } from 'src/app/app-storage.key';
import { AppState } from 'src/app/app.state';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../model/auth-response.model';
import { User } from '../model/user.model';
import { LogoutAction } from '../store/auth.action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  timOutInterval: any;

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  /**
   * login: Based on the user's credential, it returns the details
   *  from the server after sigin
   *
   * @param email : tring
   * @param password : string
   * @returns Observable<AuthResponse>
   */
  login(email: string, password: string): Observable<AuthResponse> {
    let payload = { email, password, returnSecureToken: true };
    console.log('payload', payload);

    let signInEndpoint =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

    return this.http.post<AuthResponse>(
      `${signInEndpoint}${environment.firebase.apiKey}`,
      payload
    );
  }

  /**
   * signup: Based on the user's credential, it returns the details
   *  from the server after signup
   *
   * @param email : tring
   * @param password : string
   * @returns Observable<AuthResponse>
   */

  signup(email: string, password: string): Observable<AuthResponse> {
    let payload = { email, password, returnSecureToken: true };
    let signInEndpoint =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

    return this.http.post<AuthResponse>(
      `${signInEndpoint}${environment.firebase.apiKey}`,
      payload
    );
  }

  /**
   * logout : Removes the clients details from the local storage, and
   *    clear the timeout function that monitors the period the client must relogin
   */

  logout() {
    localStorage.removeItem(lk.USER_DATA);
    if (this.timOutInterval) {
      clearInterval(this.timOutInterval);
      this.timOutInterval = null;
    }
  }

  /**
   * setUserInLocalStorage: Takes a User object then stringifies it
   *  and store the result on the client's device
   *
   * @param user : User
   */
  setUserInLocalStorage(user: User) {
    localStorage.setItem(lk.USER_DATA, JSON.stringify(user));
    this.runTimeOutInterval(user);
  }

  /**
   * runTimeOutInterval: Takes an instance of user and based on
   *  the expiring time of its token, it sets a timeOut function and assign
   *  it to "this.timOutInterval". This will trigger the dispatch(LougoutAction)
   *  when the time it due.
   *
   *
   * @param user: User
   */
  runTimeOutInterval(user: User) {
    const currentTime = new Date().getTime();
    const expiringTime = user.expiringDate.getTime();

    const timeInterval = expiringTime - currentTime;

    console.log(' time start  in sec:', currentTime / 100);
    console.log(' time to expire in sec:', expiringTime / 1000);
    console.log(' time interval to expire in sec:', timeInterval / 1000);

    this.timOutInterval = setTimeout(() => {
      //logout or get refresh token
      this.store.dispatch(LogoutAction());
    }, timeInterval);
  }

  /**
   * formatAuthResponseToUser: Format the response got from the API call (AuthResponse)
   *  into User object, usable by components
   *
   * @param data : AuthResponse
   * @returns user: User
   */
  formatAuthResponseToUser(data: AuthResponse): User {
    let user = null;
    if (data) {
      const expiringDate = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      user = new User(data.email, data.idToken, data.localId, expiringDate);
      this.runTimeOutInterval(user);
    }

    return user;
  }

  /**
   * getUserFromLocalStorage: Fetch the user from the local storate
   *  and format it to User object when it's found, otherwise it
   *  returns null
   *
   * @returns User|null
   */
  getUserFromLocalStorage(): User {
    const userData = localStorage.getItem(lk.USER_DATA);

    console.log('userData = ', userData);
    
    if (userData) {
      const userObj = JSON.parse(userData);
      const expiringDate = new Date(userObj._expiringDate);
      
      const user = new User(
        userObj._email,
        userObj._token,
        userObj._localId,
        expiringDate
      );
      return user;
    }
    return null;
  }

  /**
   * getErrorMessage: Based on the error message from the server,
   *  it return a more meaningful message to the client
   *
   * @param message : string (message text from the server)
   * @returns string
   */
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
