import { Action, createAction, props } from "@ngrx/store";
import { CounterActionType } from "../type/counter-action-type.enum";
import { CounterStateInterface } from "../state/counter-state.interface";

export const incrementAction = createAction(CounterActionType.INCREMENT );

export const decrementAction = createAction( CounterActionType.DECREMENT );

export const resetAction = createAction( CounterActionType.RESET );