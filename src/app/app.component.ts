import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
import { AutoLoginAction } from './auth/store/auth.action';
import { ErrorMessageSelector$, LoadingSpinnerSelector$ } from './shared/store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'NgRx Complete tutorial';
  showLoading$: Observable<boolean> ;
  errorMessage$: Observable<string> ; 

  constructor(private store: Store<AppState>){

  }

  ngOnInit(){
    this.showLoading$ = this.store.select(LoadingSpinnerSelector$);
    this.errorMessage$ = this.store.select(ErrorMessageSelector$);
    this.store.dispatch(AutoLoginAction())
  }
}
