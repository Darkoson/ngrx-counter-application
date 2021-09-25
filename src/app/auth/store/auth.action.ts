import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActionType } from "./auth.type";

export const LoginStartAction = createAction(AuthActionType.LOGIN_START, props<{email:string, password:string}>())

export const LoginSuccessAction = createAction(AuthActionType.LOGIN_SUCCESS, props<{user: User}>()) ;