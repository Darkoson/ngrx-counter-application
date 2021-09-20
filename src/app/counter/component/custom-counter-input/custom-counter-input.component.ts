import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrementAction } from '../../store/action/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value:number 

  constructor(private store: Store) { }

  addValue(){
    this.store.dispatch(customIncrementAction({value: +(this.value)}))
    console.log('custome component called');
    
    
  }


  ngOnInit(): void {
  }

}
