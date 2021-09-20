import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/component/counter/counter.component';
import { HomeComponent} from './home/component/home/home.component';
import { PostListComponent } from './post/component/post-list/post-list.component';

const routes: Routes = [
  { path:'' , component:HomeComponent},
  { path:'counter' , component:CounterComponent},
  { path:'posts' , component:PostListComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
