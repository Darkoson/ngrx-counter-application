import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StateStorageKeys as sk } from 'src/app/app-storage.key';
import { CounterButtonComponent } from '../component/counter-button/counter-button.component';
import { CounterOutputComponent } from '../component/counter-output/counter-output.component';
import { CounterComponent } from '../component/counter/counter.component';
import { CustomCounterInputComponent } from '../component/custom-counter-input/custom-counter-input.component';
import { CounterReducer } from '../store/counter.reducer';
import { CounterRoutingModule } from './counter-routing.module';

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(sk.COUNTER, CounterReducer),
    CounterRoutingModule, 
  ],
  exports: [CounterRoutingModule
],
  providers: [],
})
export class CounterModule {}
