import { CounterReducer } from "src/app/counter/store/counter.reducer";
import { CounterStateInterface } from "src/app/counter/store/counter.state";
import { PostReducer } from "src/app/post/store/post.reducer";
import { PostStateInterface } from "src/app/post/store/post.state";

export interface AppState{
    counter: CounterStateInterface
    posts: PostStateInterface
}

export const appReducer  = {
    // counter: counterReducer,
    // posts:postReducer
}