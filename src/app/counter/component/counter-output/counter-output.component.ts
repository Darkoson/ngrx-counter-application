import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ChannelNameStateSelector$, CounterStateSelector$ } from '../../store/counter.selector';
import { CounterStateInterface } from '../../store/counter.state';

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
    this.counter$ = this.store.pipe(select(CounterStateSelector$)); 
    this.channelName$ = this.store.pipe(select(ChannelNameStateSelector$))
  }
  

}
