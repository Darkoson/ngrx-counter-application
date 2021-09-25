import { createAction, props } from "@ngrx/store";
import { AuthActionType } from "./auth.type";

export const LoginAction = createAction(AuthActionType.LOGIN_START, props<{email:string, password:string}>())

export const LoginSuccessAction = createAction(AuthActionType.LOGIN_SUCCESS) ;