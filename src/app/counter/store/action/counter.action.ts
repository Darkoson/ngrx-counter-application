import { Action, createAction, props } from "@ngrx/store";
import { CounterActionType } from "../type/counter-action-type.enum"; 

export const incrementAction = createAction(CounterActionType.INCREMENT )

export const decrementAction = createAction( CounterActionType.DECREMENT )

export const resetAction = createAction( CounterActionType.RESET )

export const channelNameAction = createAction( CounterActionType.CHANNEL_NAME )

export const customIncrementAction = createAction( 
    CounterActionType.CUSTOM_INCREMENT,
    props<{value: number}>()
)


