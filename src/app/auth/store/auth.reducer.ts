import { createReducer, on, props } from "@ngrx/store"
import { LoginStartAction, LoginSuccessAction } from "./auth.action"
import {  AuthInitialState } from "./auth.state"

const _authReducer = createReducer(AuthInitialState, 
    
    on(LoginStartAction, (state, action)=>{
        return {
            ...state , email: action.email, password: action.password
        }
    }),
    
    on(LoginSuccessAction, (state, action)=>{
        return {
            ...state ,
            user: action.user
        }
    })
    );

export function AuthReducer(state, action){
    return _authReducer(state, action)
}