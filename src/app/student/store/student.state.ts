import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Student } from '../model/student.model';

export interface StudentState extends EntityState<Student> {}

export const studentAdapter = createEntityAdapter<Student>();

export const studentInitialState = studentAdapter.getInitialState();
