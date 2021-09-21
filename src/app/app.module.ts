import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/component/counter/counter.component';
import { CounterOutputComponent } from './counter/component/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/component/counter-button/counter-button.component';
import { StoreModule} from '@ngrx/store';
import { CustomCounterInputComponent } from './counter/component/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/component/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { PostListComponent } from './post/component/post-list/post-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment as env} from 'src/environments/environment';
import { appReducer } from './shared/store/state/app.state';
import { AddPostComponent } from './post/component/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer ),
    StoreDevtoolsModule.instrument({maxAge:30,logOnly: env.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
