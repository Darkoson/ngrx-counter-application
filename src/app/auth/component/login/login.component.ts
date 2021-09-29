import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoadingSpinnerAction } from 'src/app/shared/store/shared/shared.action';
import { LoginStartAction } from '../../store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private store: Store<AppState>) {}

  onLogin() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    this.store.dispatch(LoadingSpinnerAction({status:true}))
    this.store.dispatch(LoginStartAction({ email, password }));
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
