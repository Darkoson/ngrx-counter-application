import { Action, createAction, props } from "@ngrx/store";
import { CounterActionType } from "./counter.type"; 

export const IncrementAction = createAction(CounterActionType.INCREMENT )

export const DecrementAction = createAction( CounterActionType.DECREMENT )

export const ResetAction = createAction( CounterActionType.RESET )

export const ChannelNameAction = createAction( CounterActionType.CHANNEL_NAME )

export const CustomIncrementAction = createAction( 
    CounterActionType.CUSTOM_INCREMENT,
    props<{value: number}>()
)


