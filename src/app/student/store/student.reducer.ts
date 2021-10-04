import { createReducer, on } from '@ngrx/store';
import { StudentAddAction, StudentDeleteSuccessAction, StudentLoadSuccessAction, StudentUpdateSuccessAction } from './student.action';
import { studentAdapter, studentInitialState } from './student.state';

const _studentReducer = createReducer(
  studentInitialState,

  on(StudentAddAction, (state, action) => {
    return studentAdapter.addOne(action.student, state);
  }),

  on(StudentDeleteSuccessAction, (state, action) => {
    return studentAdapter.removeOne(action.id, state);
  }),

  on(StudentLoadSuccessAction, (state, action) => {
    return studentAdapter.setAll(action.students, state);
  }),

  on(StudentUpdateSuccessAction, (state, action) => {
    return studentAdapter.updateOne(action.student, state);
  }),

);

export function studentReducer(state, action) {
  return _studentReducer(state, action);
}
