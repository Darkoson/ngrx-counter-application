import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { LogoutAction } from 'src/app/auth/store/auth.action';
import { isAuthenticatedSlector$ } from 'src/app/auth/store/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>
  constructor(private store: Store<AppState>) { }

  onLogout(event: Event){
    event.preventDefault();
    this.store.dispatch(LogoutAction())
  }
  
  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAuthenticatedSlector$)
  }

}
