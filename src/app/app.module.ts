import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/component/counter/counter.component';
import { CounterOutputComponent } from './counter/component/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/component/counter-button/counter-button.component';
import { StoreModule} from '@ngrx/store';
import { counterReducer } from './counter/store/reducer/counter.reducer';
import { CustomCounterInputComponent } from './counter/component/custom-counter-input/custom-counter-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({counterKey: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
