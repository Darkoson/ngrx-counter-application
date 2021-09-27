import { createReducer, on } from "@ngrx/store";
import { PostAddAction, PostAddSuccessAction, PostDeleteAction, PostLoadSuccessAction, PostUpdateAction } from "./post.action";
import { PostInitialState } from "./post.state";
import { Post } from "../model/post.model";


const _postReducer = createReducer(
    PostInitialState,
    on(PostAddSuccessAction, (state, action) =>{
            
            return { ...state, posts: [...state.posts, action.post] }
    }) ,

    on(PostUpdateAction,(state,action)=>{

        let posts = state.posts.map(post => post.id === action.post.id? action.post: post )
        return {...state, posts:[...posts]} 
    }),

    on(PostDeleteAction,(state, action)=>{
        let posts = state.posts.filter((post)=>post.id != action.id)
        return {...state, posts}
    }),

    on(PostLoadSuccessAction,(state, action)=>{
        let posts = action.posts
        return {...state, posts}
    })
    
    
)
    

export function PostReducer(state, action){
    return _postReducer(state, action)
}   