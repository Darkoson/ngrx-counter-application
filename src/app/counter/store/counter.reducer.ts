import { Action, createReducer, on } from '@ngrx/store';

import {
    ChannelNameAction,
    CustomIncrementAction,
  DecrementAction,
  IncrementAction,
  ResetAction,
} from './counter.action';
import { CounterStateInterface, CounterInitialState } from './counter.state';
 

const _counterReducer = createReducer<CounterStateInterface,Action > (
    CounterInitialState,

  on(IncrementAction, (state) => ({
    ...state,
    counter: state.counter + 1,
  })),

  on(DecrementAction, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),

  on(ResetAction, (state) => ({
    ...state,
    counter: 0,
})),

on(ChannelNameAction, (state) => ({
    ...state,
    channelName: "Channel name changed",
  })),

  on(CustomIncrementAction,
    (state, action)=>({
        ...state,
        counter: (state.counter) + action.value
    })),

);

export function CounterReducer(state:CounterStateInterface, action:Action)
{
    return _counterReducer(state, action);
}