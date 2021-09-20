import { Action, createReducer, on } from '@ngrx/store';

import {
  decrementAction,
  incrementAction,
  resetAction,
} from '../action/counter.action';
import { CounterStateInterface } from '../state/counter-state.interface';


const initialState: CounterStateInterface|null = {
    counter: 0
}

const _counterReducer = createReducer<CounterStateInterface,Action > (
  initialState,

  on(incrementAction, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),

  on(decrementAction, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),

  on(resetAction, (state) => ({
    ...state,
    counter: 0,
  }))
);

export function counterReducer(state:CounterStateInterface, action:Action)
{
    return _counterReducer(state, action);
}