import { Post } from "../model/post.model";

export interface PostStateInterface{
    posts: Post[]
}

export const PostInitialState: PostStateInterface = {
    posts: null
}