import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from '../component/student-add/student-add.component';
import { StudentEditComponent } from '../component/student-edit/student-edit.component';
import { StudentListComponent } from '../component/student-list/student-list.component';

const routes: Routes = [
  {path:'',  children:[
    { path:'', redirectTo: 'list', pathMatch: 'full' },
    { path:'list', component:StudentListComponent },
    { path:'edit', component:StudentEditComponent },
    { path:'add', component:StudentAddComponent },
  ]}
];

@NgModule({
  declarations:[

  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
