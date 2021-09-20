import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { channelNameAction, decrementAction, incrementAction, resetAction } from '../../store/action/counter.action';
import { CounterStateInterface } from '../../store/state/counter.state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store: Store<{counter: CounterStateInterface}>) { }

  onIncrement(){
    this.store.dispatch(incrementAction())
    console.log('button component called');
  }
  onDecrement(){
    this.store.dispatch(decrementAction())
  }
  onReset(){
    this.store.dispatch(resetAction())
  } 

  onChangeChannelName(){
    this.store.dispatch(channelNameAction())
  }

  ngOnInit(): void {
  }

}
