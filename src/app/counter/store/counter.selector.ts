import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateStorageKeys as sk } from "src/app/app-storage.key";
import { CounterStateInterface } from "./counter.state";


const counterStateFeatureSelector$ = createFeatureSelector<CounterStateInterface>(sk.COUNTER)

export const CounterStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.counter
)

export const ChannelNameStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.channelName
)