import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { LoginStartAction, LoginSuccessAction } from './auth.action';
import { exhaustMap, map } from 'rxjs/operators';
import { LoadingSpinnerAction } from 'src/app/shared/store/shared.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(LoginStartAction),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((result) => {
            const user = this.authService.formatAuthResponseToUser(result);

            this.store.dispatch(LoadingSpinnerAction({ status: false }));
            return LoginSuccessAction({ user });
          })
        );
      })
    );
  });
}
