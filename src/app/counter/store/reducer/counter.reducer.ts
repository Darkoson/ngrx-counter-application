import { Action, createReducer, on } from '@ngrx/store';

import {
    channelNameAction,
    customIncrementAction,
  decrementAction,
  incrementAction,
  resetAction,
} from '../action/counter.action';
import { CounterStateInterface, CounterInitialState } from '../state/counter-state.interface';
 

const _counterReducer = createReducer<CounterStateInterface,Action > (
    CounterInitialState,

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
})),

on(channelNameAction, (state) => ({
    ...state,
    channelName: "Channel name changed",
  })),

  on(customIncrementAction,
    (state, action)=>({
        ...state,
        counter: (state.counter) + action.value
    })),

);

export function counterReducer(state:CounterStateInterface, action:Action)
{
    return _counterReducer(state, action);
}