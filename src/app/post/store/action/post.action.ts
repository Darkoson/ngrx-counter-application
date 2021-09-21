import { createAction, props } from "@ngrx/store";
import { Post } from "../type/post.model";
import { PostActionType } from "../type/post.type";

export const postListAction  = createAction(PostActionType.POST_LIST)

export const postAddAction = createAction(PostActionType.POST_ADD, props<{post: Post}>())

export const postUpdateAction = createAction(PostActionType.POST_UPDATE, props<{post: Post}>())

export const postDeleteAction = createAction(PostActionType.POST_DELETE, props<{id:number}>())