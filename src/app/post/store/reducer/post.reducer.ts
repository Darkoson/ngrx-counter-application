import { createReducer, on } from "@ngrx/store";
import { postAddAction } from "../action/post.action";
import { postInitialState } from "../state/post.state";
import { Post } from "../type/post.model";


const _postReducer = createReducer(
    postInitialState,
    on(
        postAddAction,
        (state, action) =>{

            let post: Post ={ ...action.post};
            post.id = (state.posts.length +1)

            return {
                ...state,
                posts: [...state.posts, post]
            }
    }))
    

export function postReducer(state, action){
    return _postReducer(state, action)
}   