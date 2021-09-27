import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { LoadingSpinnerAction } from 'src/app/shared/store/shared.action';
import { SignupStartAction } from '../../store/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  constructor(private store:Store<AppState>) { }

  onSingup(){
    if(!this.signupForm.valid) return;

    const email = this.signupForm.value.email ;
    const password = this.signupForm.value.email ;
     this.store.dispatch(LoadingSpinnerAction({status:true}))
    this.store.dispatch(SignupStartAction({email, password}))
  }



  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),

      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

}
