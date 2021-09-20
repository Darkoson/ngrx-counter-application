import { createAction } from "@ngrx/store";
import { postReducer } from "../reducer/post.reducer";
import { PostActionType } from "../type/post.type";

export const postListAction  = createAction(PostActionType.POST_LIST)