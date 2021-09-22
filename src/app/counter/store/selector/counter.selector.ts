import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoreType } from "src/app/shared/store/type/store.type";
import { CounterStateInterface } from "../state/counter.state";


const counterStateFeatureSelector$ = createFeatureSelector<CounterStateInterface>(StoreType.COUNTER)

export const counterStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.counter
)

export const channelNameStateSelector$ = createSelector(
    counterStateFeatureSelector$,
    state => state.channelName
)