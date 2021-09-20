  import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterStateInterface } from '../../store/state/counter-state.interface';

  @Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
  })
  export class CounterComponent implements OnInit {


    constructor(private store: Store<{counterKey: CounterStateInterface}>) { }
    ngOnInit(): void {
      
    }
 
  }
