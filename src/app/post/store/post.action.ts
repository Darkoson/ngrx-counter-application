import { createAction, props } from "@ngrx/store";
import { Post } from "../model/post.model";
import { PostActionType } from "./post.type";

export const PostListAction  = createAction(PostActionType.POST_LIST)

export const PostAddAction = createAction(PostActionType.POST_ADD, props<{post: Post}>())

export const PostUpdateAction = createAction(PostActionType.POST_UPDATE, props<{post: Post}>())

export const PostDeleteAction = createAction(PostActionType.POST_DELETE, props<{id:number}>())