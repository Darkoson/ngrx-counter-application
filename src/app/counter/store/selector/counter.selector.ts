import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateInterface } from "../state/counter.state";

export class CounterSelector{
    
}

const _counterStateFeatureSelector = createFeatureSelector<CounterStateInterface>('counter')

export const counterStateSelector = createSelector(
    _counterStateFeatureSelector,
    state => state.counter
)

export const channelNameStateSelector = createSelector(
    _counterStateFeatureSelector,
    state => state.channelName
)