  import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

  @Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
  })
  export class CounterComponent implements OnInit {


    constructor(private store: Store<AppState>) { }
    
    ngOnInit(): void {
      
    }
 
  }
