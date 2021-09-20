import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterStateInterface } from "../state/counter-state.interface";

export class CounterSelector{
    
}

const _counterStateFeatureSelector = createFeatureSelector<CounterStateInterface>('counterKey')

export const counterStateSelector = createSelector(
    _counterStateFeatureSelector,
    state => state.counter
)

export const channelNameStateSelector = createSelector(
    _counterStateFeatureSelector,
    state => state.channelName
)