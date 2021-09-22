import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { StoreType } from "src/app/shared/store/type/store.type";
import { PostStateInterface } from "../state/post.state";


const postFeatureSelector$ = createFeatureSelector<PostStateInterface>(StoreType.POST)

export const postsSelector$ = createSelector(
    postFeatureSelector$,
    (state)=>  state.posts
);

export const postByIdSelector$ = createSelector( postFeatureSelector$, 
     (state:PostStateInterface, props:{id:string})=>  { 
        return state.posts.find((post)=>post.id == parseInt(props.id) )   ;
    }
)