import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from '../../model/post.model';
import { PostByIdSelector$ } from '../../store/post.selector';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Observable<Post>
  
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.post = this.store.select(PostByIdSelector$)
  }

}
