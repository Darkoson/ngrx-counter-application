import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { LoginStartAction, LoginSuccessAction } from './auth.action';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import {
  ErrorMessageAction,
  LoadingSpinnerAction,
} from 'src/app/shared/store/shared.action';
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

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(LoginStartAction),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((result) => {
            const user = this.authService.formatAuthResponseToUser(result);
            this.store.dispatch(LoadingSpinnerAction({ status: false }));
            this.store.dispatch(ErrorMessageAction({ message: '' }));
            return LoginSuccessAction({ user });
          }),

          catchError((errResp) => {
            let httpError: string = errResp.error.error.message;
            const errorMessage = this.authService.getErrorMessage(httpError);
            console.log('error object', errorMessage);
            this.store.dispatch(LoadingSpinnerAction({ status: false }));
            return of(ErrorMessageAction({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(LoginSuccessAction),
        tap(() => {
          this.router.navigate(['/home']);
        })
      );
    },
    { dispatch: false }
  );
}
