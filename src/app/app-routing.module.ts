import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/service/auth.guard';
import { HomeComponent} from './home/component/home/home.component'; 
import { SinglePostComponent } from './post/component/single-post/single-post.component';

const routes: Routes = [
  { path:'' , component:HomeComponent},
  { path:'auth' , loadChildren: () =>import('./auth/module/auth.module').then(m =>m.AuthModule)},
  { path:'counter' ,  canActivate:[AuthGuard], loadChildren: () =>import('./counter/module/counter.module').then(m =>m.CounterModule)},
  { path:'posts' , canActivate:[AuthGuard], loadChildren: ()=> import('./post/module/post.module').then(m=>m.PostModule)},
  { path:'posts/single/:id' , component: SinglePostComponent},
  
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  
  exports:[RouterModule]
})
export class AppRoutingModule { }
