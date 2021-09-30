import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { of } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { PostService } from '../service/post.service';
import {
  PostAddAction,
  PostAddSuccessAction,
  PostDeleteAction,
  PostDeleteSuccessAction,
  PostListAction,
  PostLoadAction,
  PostLoadSuccessAction,
  PostUpdateAction,
  PostUpdateSuccessAction,
} from './post.action';

@Injectable()
export class PostEffect {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private router: Router
  ) {}

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostAddAction),
      mergeMap((action) => {
        return this.postService.postPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return PostAddSuccessAction({ post });
          })
        );
      })
    );
  });

  loadPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostLoadAction),
      mergeMap((action) => {
        return this.postService.getPost().pipe(
          map((data) => {
            return PostLoadSuccessAction({ posts: data });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostUpdateAction),
      switchMap((action) => {
        return this.postService.updatePost(action.post).pipe(
          map((data) => {
            const post = action.post;
            return PostUpdateSuccessAction({ post });
          })
        );
      })
    );
  });

  updatePostRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(PostUpdateSuccessAction),
        map((action) => {
          this.router.navigate(['posts']);
        })
      );
    },
    { dispatch: false }
  );

  getSinglePost$ = createEffect( ()=>{
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((routerAction: RouterNavigationAction) => {
        return routerAction.payload.routerState.url.startsWith('/posts/single')
      } ),
      map((routerAction: RouterNavigationAction) =>{
        return  routerAction.payload.routerState['params']['id']
      }),
      switchMap((id)=>{ 
        return this.postService.getPostById(id).pipe(
          map((post) =>{
            return PostLoadSuccessAction({posts:[{...post}]})
          })
        )
      })
    )
  })

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostDeleteAction),
      switchMap((action) => {
        return this.postService
          .deletePost(action.id)
          .pipe(map((result) => PostDeleteSuccessAction({ id: action.id })));
      })
    );
  });
}
