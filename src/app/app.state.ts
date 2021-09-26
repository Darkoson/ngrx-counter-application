import { AuthReducer } from "./auth/store/auth.reducer";
import { AuthState } from "./auth/store/auth.state";
import { SharedReducer } from "./shared/store/shared.reducer";
import { SharedState } from "./shared/store/shared.state";
import { StateStorageKeys as sk } from "./app-storage.key";
import { AuthEffects } from "./auth/store/auth.effect";

export interface AppState{
    [sk.SHARED] : SharedState,
    [sk.AUTH] : AuthState
}

export const appReducers  = {
    [sk.SHARED] : SharedReducer,
    [sk.AUTH] : AuthReducer
}

export const appEffects  =  [
    AuthEffects
]
