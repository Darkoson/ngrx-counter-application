import { createReducer, on, props } from "@ngrx/store"
import { LoginStartAction, LoginSuccessAction } from "./auth.action"
import {  InitialState } from "./auth.state"

const _authReducer = createReducer(InitialState, 
    
    on(LoginSuccessAction, (state, action)=>{
        return {
            ...state ,
            user: action.user
        }
    }));

export function AuthReducer(state, action){
    return _authReducer(state, action)
}