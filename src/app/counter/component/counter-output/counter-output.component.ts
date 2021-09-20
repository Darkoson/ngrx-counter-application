import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { channelNameStateSelector, counterStateSelector } from '../../store/selector/counter.selector';
import { CounterStateInterface } from '../../store/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit  {

   
  counter$: Observable<number> 
  channelName$: Observable<string>

  constructor(private store: Store<{counterKey: CounterStateInterface}>) { }

  ngOnInit(): void {
    this.counter$ = this.store.pipe(select(counterStateSelector)); 
    this.channelName$ = this.store.pipe(select(channelNameStateSelector))
  }
  

}
