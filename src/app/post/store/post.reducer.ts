import { createReducer, on } from "@ngrx/store";
import { PostAddSuccessAction,  PostDeleteSuccessAction, PostLoadSuccessAction,  PostUpdateSuccessAction } from "./post.action";
import { PostInitialState } from "./post.state";


const _postReducer = createReducer(
    PostInitialState,

    on(PostLoadSuccessAction,(state, action)=>{
        let posts = action.posts
        return {...state, posts}
    }),

    on(PostAddSuccessAction, (state, action) =>{
            
            return { ...state, posts: [...state.posts, action.post] }
    }) ,

    on(PostUpdateSuccessAction,(state,action)=>{

        let posts = state.posts.map(post => post.id === action.post.id? action.post : post )
        return {...state, posts:[...posts]} 
    }),

    on(PostDeleteSuccessAction,(state, action)=>{
        let posts = state.posts.filter((post)=>post.id != action.id)
        return {...state, posts}
    }),
    
)
    

export function PostReducer(state, action){
    return _postReducer(state, action)
}   