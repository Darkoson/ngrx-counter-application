import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/shared/store/state/app.state';
import { postDeleteAction } from '../../store/action/post.action';
import { postsSelector$ } from '../../store/selector/post.selector';
import { Post } from '../../store/type/post.model';

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
      this.store.dispatch(postDeleteAction({id}))
      
    }
  }

  ngOnInit(): void {
    this.posts$ = this.store.select(postsSelector$)
  }

}
