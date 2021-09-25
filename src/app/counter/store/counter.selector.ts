import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreType } from "src/app/store.type";
import { CounterStateInterface } from "./counter.state";


const counterStateFeatureSelector$ = createFeatureSelector<CounterStateInterface>(StoreType.COUNTER)

export const CounterStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.counter
)

export const ChannelNameStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.channelName
)