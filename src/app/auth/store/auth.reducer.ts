import { createReducer, props } from "@ngrx/store"
import {  InitialState } from "./auth.state"

const _authReducer = createReducer(InitialState);

export function AuthReducer(state, action){
    return _authReducer(state, action)
}