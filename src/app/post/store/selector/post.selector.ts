import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { PostStateInterface } from "../state/post.state";


const postFeatureSelector$ = createFeatureSelector<PostStateInterface>('posts')

export const postsSelector$ = createSelector(
    postFeatureSelector$,
    (state)=>  state.posts
);

export const postByIdSelector$ = createSelector( postFeatureSelector$, 
     (state:PostStateInterface, props:{id:string})=>  { 
        return state.posts.find((post)=>post.id == parseInt(props.id) )   ;
    }
)