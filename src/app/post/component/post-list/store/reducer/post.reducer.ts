import { createReducer } from "@ngrx/store";
import { postInitialState } from "../state/post.state";


const _postReducer = createReducer(postInitialState)

export function postReducer(state, action){
    return _postReducer(state, action)
}   