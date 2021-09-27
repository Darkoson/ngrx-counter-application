import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import {
  AutoLoginAction,
  LoginStartAction,
  LoginSuccessAction,
  LogoutAction,
  SignupStartAction,
  SignupSuccessAction,
} from './auth.action';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { ErrorMessageAction, LoadingSpinnerAction,} from 'src/app/shared/store/shared.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  autoLogin$ = createEffect(() => {
    return this.action$.pipe(
      ofType(AutoLoginAction),
      mergeMap((action) => {
        const user = this.authService.getUserFromLocalStorage();
        console.log('Effect-Autologin:user from localstorage=', user);
        if(user){
          return of(LoginSuccessAction({ user, redirect: false }));
        }
        else{
          return of(LogoutAction())
        }
      })
    );
  });

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(LoginStartAction),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((result) => {
            const user = this.authService.formatAuthResponseToUser(result);
            this.authService.setUserInLocalStorage(user);

            this.store.dispatch(LoadingSpinnerAction({ status: false }));
            this.store.dispatch(ErrorMessageAction({ message: '' }));
            return LoginSuccessAction({ user, redirect: true });
          }),

          catchError((errResp) => {
            let httpError: string = errResp.error.error.message;
            const errorMessage = this.authService.getErrorMessage(httpError);
            this.store.dispatch(LoadingSpinnerAction({ status: false }));
            return of(ErrorMessageAction({ message: errorMessage }));
          })
        );
      })
    );
  });

  logoutEffect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(LogoutAction),
        map((action) => {
          this.authService.logout();
          this.router.navigate(['/auth']);
        })
      );
    },
    { dispatch: false }
  );

  signupEffect$ = createEffect(() => {
    return this.action$.pipe(
      ofType(SignupStartAction),
      exhaustMap((action) => {
        return this.authService.signup(action.email, action.password).pipe(
          map((result) => {
            const user = this.authService.formatAuthResponseToUser(result);
            this.authService.setUserInLocalStorage(user);
            this.store.dispatch(LoadingSpinnerAction({ status: false }));
            this.store.dispatch(ErrorMessageAction({ message: '' }));
            return SignupSuccessAction({ user, redirect: true });
          })
        );
      }),

      catchError((errResp) => {
        let httpError: string = errResp.error.error.message;
        const errorMessage = this.authService.getErrorMessage(httpError);
        this.store.dispatch(LoadingSpinnerAction({ status: false }));
        return of(ErrorMessageAction({ message: errorMessage }));
      })
    );
  });

  redirectAfterSuccessfulLoginOrSignup$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(...[LoginSuccessAction, SignupSuccessAction]),
        tap((action) => {
          if (action.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );
}
