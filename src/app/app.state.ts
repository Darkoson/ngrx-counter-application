import { AuthReducer } from "./auth/store/auth.reducer";
import { AuthState } from "./auth/store/auth.state";
import { SharedReducer } from "./shared/store/shared/shared.reducer";
import { SharedState } from "./shared/store/shared/shared.state";
import { StateStorageKeys as sk } from "./app-storage.key";
import { AuthEffects } from "./auth/store/auth.effect";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

export interface AppState{
    [sk.SHARED] : SharedState,
    [sk.AUTH] : AuthState,
    [sk.ROUTER]: RouterReducerState,

}

export const appReducers  = {
    [sk.SHARED] : SharedReducer,
    [sk.AUTH] : AuthReducer,
    [sk.ROUTER]: routerReducer,
}

export const appEffects  =  [
    AuthEffects
]
