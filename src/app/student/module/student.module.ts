import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from '../component/student-list/student-list.component';
import { StudentAddComponent } from '../component/student-add/student-add.component';
import { StudentEditComponent } from '../component/student-edit/student-edit.component';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
