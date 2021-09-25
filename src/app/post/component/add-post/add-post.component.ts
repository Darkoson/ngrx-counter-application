import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/app.state';
import { PostAddAction } from '../../store/post.action';
import { Post } from '../../model/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  showDescriptionErrors(){

    const descritionInput = this.postForm.get('description')

    if(descritionInput.touched && !descritionInput.valid){
      if(descritionInput.errors.required){
        return 'The description is required!'
      } 
      else if(descritionInput.errors.minlength){
        return 'The minimum character is 10!'
      } 
      else{
        return null
      }
    }
    else return null ;
  }

  onAddPost(){
    if(!this.postForm.valid){
      return;
    }

    const post:Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    }
    
    this.store.dispatch(PostAddAction({post}))
    this.postForm.reset()
  }

}
