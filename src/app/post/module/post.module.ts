import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StateStorageKeys as sk } from 'src/app/app-storage.key';

import { AddPostComponent } from '../component/add-post/add-post.component';
import { EditPostComponent } from '../component/edit-post/edit-post.component';
import { PostListComponent } from '../component/post-list/post-list.component';
import { PostReducer } from '../store/post.reducer';
import { PostRoutingModule } from './post-routing.module';


@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    StoreModule.forFeature(sk.POST, PostReducer)
  ],
  exports: [ 
     PostRoutingModule
  ],
})
export class PostModule {}
