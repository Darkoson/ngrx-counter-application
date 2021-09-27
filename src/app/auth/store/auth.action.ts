import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActionType as type } from "./auth.type";

export const LoginStartAction = createAction(type.LOGIN_START, props<{email:string, password:string}>())

export const LoginSuccessAction = createAction(type.LOGIN_SUCCESS, props<{user: User, redirect: boolean}>()) ;

export const AutoLoginAction = createAction(type.AUTO_LOGIN) ;

export const LogoutAction = createAction(type.AUTO_LOGOUT) ;

export const SignupStartAction = createAction(type.SIGNUP_START,  props<{email:string, password:string}>())

export const SignupSuccessAction = createAction(type.SIGNUP_SUCCSESS, props<{user: User, redirect: boolean}>())