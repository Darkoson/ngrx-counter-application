import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { PostService } from '../service/post.service';
import {
    PostAddAction,
  PostAddSuccessAction,
  PostListAction,
  PostLoadAction,
  PostLoadSuccessAction,
} from './post.action';

@Injectable()
export class PostEffect {
  constructor(private actions$: Actions, private postService: PostService) {}


  addPost$ = createEffect(()=>{
      return this.actions$.pipe(
          ofType(PostAddAction),
          mergeMap((action)=>{
            return this.postService.postPost(action.post).pipe(
                map(data =>{
                    const post = {...action.post, id: data.name}
                    return PostAddSuccessAction({post})
                })
            )

          })
      )
  } )


  loadPost$ = createEffect(
    () => {
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
    },
  );

  
}
