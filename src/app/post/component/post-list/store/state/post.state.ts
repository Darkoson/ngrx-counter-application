import { Post } from "../type/post.model";

export interface PostStateInterface{
    posts: Post[]
}

export const postInitialState: PostStateInterface = {
    posts: [
        {id: 1 , title: "Default title", description: "Default description"},
        {id: 2 , title: "Default title", description: "Default description"},
    ]
}