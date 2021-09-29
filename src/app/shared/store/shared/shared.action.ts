import { createAction, props } from '@ngrx/store';
import { SharedType as type } from './shared.type';

export const LoadingSpinnerAction = createAction(
  type.LOADING_SPINNER,
  props<{ status: boolean }>()
);

export const ErrorMessageAction = createAction(
  type.ERROR_MESSAGE,
  props<{ message: string }>()
);
