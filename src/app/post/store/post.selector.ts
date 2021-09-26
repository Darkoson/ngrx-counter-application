import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { StateStorageKeys as sk } from "src/app/app-storage.key";
import { PostStateInterface } from "./post.state";


const postFeatureSelector$ = createFeatureSelector<PostStateInterface>(sk.POST)

export const PostsSelector$ = createSelector(
    postFeatureSelector$,
    (state)=>  state.posts
);

export const PostByIdSelector$ = createSelector( postFeatureSelector$, 
     (state:PostStateInterface, props:{id:string})=>  { 
        return state.posts.find((post)=>post.id == parseInt(props.id) )   ;
    }
)