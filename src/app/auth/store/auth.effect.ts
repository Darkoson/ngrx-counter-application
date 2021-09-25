import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../service/auth.service';
import { LoginStartAction, LoginSuccessAction } from './auth.action';
import { exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(LoginStartAction),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((result) => {
            const user = this.authService.formatAuthResponseToUser(result)
            return LoginSuccessAction({user});
          })
        );
      })
    );
  });
}
