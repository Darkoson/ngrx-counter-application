import { createFeatureSelector, createSelector  } from "@ngrx/store";
import { StateStorageKeys as sk } from "src/app/app-storage.key";
import { RouterStateUrl } from "src/app/shared/store/router/custom-serializer";
import { currentRouteSelector$ } from "src/app/shared/store/router/router.selector";
import { PostStateInterface } from "./post.state";


const postFeatureSelector$ = createFeatureSelector<PostStateInterface>(sk.POST)

export const PostsSelector$ = createSelector(
    postFeatureSelector$,
    (state)=>  state.posts
);

export const PostByIdSelector$ = createSelector( 
    PostsSelector$, 
    currentRouteSelector$,
     (posts, route: RouterStateUrl)=>  { 
        return posts? posts.find((post)=>post.id == route.params['id'] ) : null ;
    }
)


