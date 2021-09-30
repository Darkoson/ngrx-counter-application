import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { PostUpdateAction } from '../../store/post.action';
import { PostByIdSelector$ } from '../../store/post.selector';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post: Post;
  postForm: FormGroup;
  subscription: Subscription;

  constructor( 
    private store: Store<AppState>
  ) {}

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onUpdatePost() {
    if (!this.postForm.valid) {
      return;
    }

    let post: Post = {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(PostUpdateAction({ post }));
    
  }

  ngOnInit(): void {
    this.createForm();
    this.subscription = this.store
      .select(PostByIdSelector$)
      .subscribe((post) => {
        if(post){
          this.post = post;
          this.postForm.patchValue({
            title: post.title,
            description: post.description,
          });
        }
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
