import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { EffectsModule} from '@ngrx/effects';
import { HomeComponent } from './home/component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment as env} from 'src/environments/environment';
import { HttpClientModule} from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/component/loading-spinner/loading-spinner.component';


import { appReducer } from './app.state'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge:30,logOnly: env.production})
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
