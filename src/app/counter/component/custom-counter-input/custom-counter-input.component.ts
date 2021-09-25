import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomIncrementAction } from '../../store/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {

  value:number 

  constructor(private store: Store) { }

  addValue(){
    this.store.dispatch(CustomIncrementAction({value: +(this.value)}))
    console.log('custome component called');
    
    
  }


  ngOnInit(): void {
  }

}
