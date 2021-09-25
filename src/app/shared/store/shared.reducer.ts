import { createReducer, on } from '@ngrx/store';
import { ErrorMessageAction, LoadingSpinnerAction } from './shared.action';
import { SharedInitialState, SharedState } from './shared.state';

const _sharedReducer = createReducer(
  SharedInitialState,

  on(LoadingSpinnerAction, (state, action) => ({
    ...state,
    showLoading: action.status,
  })),

  on(ErrorMessageAction, (state, action) =>({
      ...state,
      errorMessage: action.message
  }))
);

export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}
