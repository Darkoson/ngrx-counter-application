import { AuthReducer } from "./auth/store/auth.reducer";
import { AuthState } from "./auth/store/auth.state";
import { SharedReducer } from "./shared/store/shared.reducer";
import { SharedState } from "./shared/store/shared.state";
import { StoreType } from "./store.type";

export interface AppState{
    [StoreType.SHARED] : SharedState,
    [StoreType.AUTH] : AuthState
}

export const appReducer  = {
    [StoreType.SHARED] : SharedReducer,
    [StoreType.AUTH] : AuthReducer
}
