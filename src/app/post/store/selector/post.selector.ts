import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostStateInterface } from "../state/post.state";


const postFeatureSelector$ = createFeatureSelector<PostStateInterface>('posts')

export const postsSelector$ = createSelector(
    postFeatureSelector$,
    (state)=>  state.posts
)