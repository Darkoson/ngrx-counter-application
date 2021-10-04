import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { of } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { Student } from '../model/student.model';
import { StudentService } from '../service/student.service';
import {
  StudentAddAction,
  StudentAddSuccessAction,
  StudentDeleteAction,
  StudentDeleteSuccessAction,
  StudentListAction,
  StudentLoadAction,
  StudentLoadSuccessAction,
  StudentUpdateAction,
  StudentUpdateSuccessAction,
} from './student.action';

@Injectable()
export class StudentEffect {
  constructor(
    private actions$: Actions,
    private studentService: StudentService,
    private router: Router
  ) {}

  addStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentAddAction),
      mergeMap((action) => {
        return this.studentService.studentStudent(action.student).pipe(
          map((data) => {
            const student = { ...action.student, id: data.name };
            return StudentAddSuccessAction({ student });
          })
        );
      })
    );
  });

  loadStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentLoadAction),
      mergeMap((action) => {
        return this.studentService.getStudent().pipe(
          map((data) => {
            return StudentLoadSuccessAction({ students: data });
          })
        );
      })
    );
  });

  updateStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentUpdateAction),
      switchMap((action) => {
        return this.studentService.updateStudent(action.student).pipe(
          map((data) => {
            const updatedStudent: Update<Student> = {
                id: action.student.id,
                changes: {...action.student}
            }
            return StudentUpdateSuccessAction({student:updatedStudent});
          })
        );
      })
    );
  });

  updateStudentRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(StudentUpdateSuccessAction),
        map((action) => {
          this.router.navigate(['students']);
        })
      );
    },
    { dispatch: false }
  );

  getSingleStudent$ = createEffect( ()=>{
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((routerAction: RouterNavigationAction) => {
        return routerAction.payload.routerState.url.startsWith('/students/single')
      } ),
      map((routerAction: RouterNavigationAction) =>{
        return  routerAction.payload.routerState['params']['id']
      }),
      switchMap((id)=>{ 
        return this.studentService.getStudentById(id).pipe(
          map((student) =>{
            return StudentLoadSuccessAction({students:[{...student}]})
          })
        )
      })
    )
  })

  deleteStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentDeleteAction),
      switchMap((action) => {
        return this.studentService
          .deleteStudent(action.id)
          .pipe(map((result) => StudentDeleteSuccessAction({ id: action.id })));
      })
    );
  });
}
