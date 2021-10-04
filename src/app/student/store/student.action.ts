import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Student } from "../model/student.model";
import { StudentActionType } from "./student.type";

export const StudentListAction  = createAction(StudentActionType.STUDENT_LIST)

export const StudentAddAction = createAction(StudentActionType.STUDENT_ADD, props<{student: Student}>())
export const StudentAddSuccessAction = createAction(StudentActionType.STUDENT_ADD_SUCCESS, props<{student: Student}>())

export const StudentUpdateAction = createAction(StudentActionType.STUDENT_UPDATE, props<{student: Student}>())
export const StudentUpdateSuccessAction = createAction(StudentActionType.STUDENT_UPDATE_SUCCESS, props<{student: Update<Student>}>())

export const StudentDeleteAction = createAction(StudentActionType.STUDENT_DELETE, props<{id:string}>())
export const StudentDeleteSuccessAction = createAction(StudentActionType.STUDENT_DELETE_SUCCESS, props<{id:string}>())

export const StudentLoadAction = createAction(StudentActionType.STUDENT_LOAD )
export const StudentLoadSuccessAction = createAction(StudentActionType.STUDENT_LOAD_SUCCESS, props<{students: Student[]}>())