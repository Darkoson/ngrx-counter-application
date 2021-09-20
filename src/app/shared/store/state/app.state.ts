import { counterReducer } from "src/app/counter/store/reducer/counter.reducer";
import { CounterStateInterface } from "src/app/counter/store/state/counter.state";
import { postReducer } from "src/app/post/component/post-list/store/reducer/post.reducer";
import { PostStateInterface } from "src/app/post/component/post-list/store/state/post.state";

export interface AppState{
    counter: CounterStateInterface
    posts: PostStateInterface
}

export const appReducer  = {
    counter: counterReducer,
    posts:postReducer
}