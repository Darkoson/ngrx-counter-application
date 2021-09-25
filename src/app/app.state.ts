import { SharedReducer } from "./shared/store/shared.reducer";
import { SharedState } from "./shared/store/shared.state";
import { StoreType } from "./store.type";

export interface AppState{
    [StoreType.SHARED] : SharedState
}

export const appReducer  = {
    [StoreType.SHARED] : SharedReducer
}
