import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/store/app.state';
import { PostDeleteAction } from '../../store/post.action';
import { PostsSelector$ } from '../../store/post.selector';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$ : Observable<Post[]>
  constructor(private store: Store<AppState>) { }

  onDeletePost(id){
    if(confirm('Are you sure of deleting this post?')){
      this.store.dispatch(PostDeleteAction({id}))
      
    }
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(PostsSelector$)
  }

}
