import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterStateInterface } from '../../store/state/counter-state.interface';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit  {

   
  counter$: Observable<CounterStateInterface>
  subscription: Subscription;

  constructor(private store: Store<{counterKey: CounterStateInterface}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(select('counterKey')); 
  }
  

}
