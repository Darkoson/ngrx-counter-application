import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/shared/store/state/app.state';
import { postUpdateAction } from '../../store/action/post.action';
import { postByIdSelector$ } from '../../store/selector/post.selector';
import { Post } from '../../store/type/post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post: Post
  postForm: FormGroup
  subscription: Subscription

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private store: Store<AppState>) { }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description : new FormControl(this.post.description, [ Validators.required, Validators.minLength(10) ])
    })
  }

  onUpdatePost(){
    if(!this.postForm.valid){
      return
    } 

    let post: Post =  {
      id: this.post.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    this.store.dispatch(postUpdateAction({post}))
    this.router.navigate(['posts'])
  }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe((param)=>{
      const id = param.get('id')
      this.store.select(postByIdSelector$, {id})
      .subscribe(post =>{ 
        if(post){
          this.post = post
          this.createForm()
        }
        else{
          console.log('no post to update!');
          
        }
      })
    })
  }
 
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
