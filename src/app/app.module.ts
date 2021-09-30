import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './home/component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment as env } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/component/loading-spinner/loading-spinner.component';

import { appEffects, appReducers } from './app.state';
import { AuthTokenInterceptor } from './auth/service/auth-token.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './shared/store/router/custom-serializer';
import { SinglePostComponent } from './post/component/single-post/single-post.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    SinglePostComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({ maxAge: 30, logOnly: env.production }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer, 
    }),
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
