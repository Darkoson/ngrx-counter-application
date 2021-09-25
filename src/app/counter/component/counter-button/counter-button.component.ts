import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
 
import { AppState } from 'src/app/app.state';
import { ChannelNameAction, DecrementAction, IncrementAction, ResetAction } from '../../store/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  onIncrement(){
    this.store.dispatch(IncrementAction())
    console.log('button component called');
  }
  onDecrement(){
    this.store.dispatch(DecrementAction())
  }
  onReset(){
    this.store.dispatch(ResetAction())
  } 

  onChangeChannelName(){
    this.store.dispatch(ChannelNameAction())
  }

  ngOnInit(): void {
  }

}
