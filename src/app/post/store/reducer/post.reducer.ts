import { createReducer, on } from "@ngrx/store";
import { postAddAction, postDeleteAction, postUpdateAction } from "../action/post.action";
import { postInitialState } from "../state/post.state";
import { Post } from "../type/post.model";


const _postReducer = createReducer(
    postInitialState,
    on(postAddAction, (state, action) =>{
            let post: Post ={ ...action.post};
            post.id = (state.posts.length +1)
            return { ...state, posts: [...state.posts, post] }
    }) ,

    on(postUpdateAction,(state,action)=>{

        let posts = state.posts.map(post => post.id === action.post.id? action.post: post )
        return {...state, posts:[...posts]} 
    }),

    on(postDeleteAction,(state, action)=>{
        let posts = state.posts.filter((post)=>post.id != action.id)
        return {...state, posts}
    })
    
    
)
    

export function postReducer(state, action){
    return _postReducer(state, action)
}   