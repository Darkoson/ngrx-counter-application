import { Post } from "../type/post.model";

export interface PostStateInterface{
    posts: Post[]
}

export const postInitialState: PostStateInterface = {
    posts: [
        {id: 1 , title: "Default title 1", description: "Default description 1"},
        {id: 2 , title: "Default title 2", description: "Default description 2"},
    ]
}