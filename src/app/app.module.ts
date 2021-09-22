import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment as env} from 'src/environments/environment';
import { appReducer } from './shared/store/state/app.state';
import { CounterModule } from './counter/module/counter.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer ),
    StoreDevtoolsModule.instrument({maxAge:30,logOnly: env.production})
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
