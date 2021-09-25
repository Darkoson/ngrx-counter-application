import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { StoreType } from "src/app/store.type";
import { PostStateInterface } from "./post.state";


const postFeatureSelector$ = createFeatureSelector<PostStateInterface>(StoreType.POST)

export const PostsSelector$ = createSelector(
    postFeatureSelector$,
    (state)=>  state.posts
);

export const PostByIdSelector$ = createSelector( postFeatureSelector$, 
     (state:PostStateInterface, props:{id:string})=>  { 
        return state.posts.find((post)=>post.id == parseInt(props.id) )   ;
    }
)