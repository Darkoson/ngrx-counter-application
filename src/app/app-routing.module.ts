import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/component/counter/counter.component';
import { HomeComponent} from './home/component/home/home.component';
import { PostListComponent } from './post/component/post-list/post-list.component';
import { AddPostComponent } from './post/component/add-post/add-post.component';
import { EditPostComponent } from './post/component/edit-post/edit-post.component';

const routes: Routes = [
  { path:'' , component:HomeComponent},
  { path:'counter' , component:CounterComponent},
  { path:'posts' , component:PostListComponent,
    children:[
      {path:'add', component:AddPostComponent },
      {path:'edit/:id', component: EditPostComponent },
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
