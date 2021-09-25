import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreType } from 'src/app/store.type';
import { SharedState } from './shared.state';

const sharedStateSelector$ = createFeatureSelector<SharedState>(
  StoreType.SHARED
);

export const LoadingSpinnerSelector$ = createSelector(
  sharedStateSelector$,
  (state) => state.showLoading
);

export const ErrorMessageSelector$ = createSelector(
  sharedStateSelector$,
  (state) => state.errorMessage
);
