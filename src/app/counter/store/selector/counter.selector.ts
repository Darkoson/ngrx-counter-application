import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateInterface } from "../state/counter.state";

export class CounterSelector{
    
}

const counterStateFeatureSelector$ = createFeatureSelector<CounterStateInterface>('counter')

export const counterStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.counter
)

export const channelNameStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.channelName
)