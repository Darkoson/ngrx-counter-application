import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateStorageKeys as sk } from 'src/app/app-storage.key';
import { SharedState } from './shared.state';

const sharedState$ = createFeatureSelector<SharedState>(sk.SHARED);

export const LoadingSpinnerSelector$ = createSelector(
    sharedState$,
  (state) => state.showLoading
);

export const ErrorMessageSelector$ = createSelector(
  sharedState$,
  (state) => state.errorMessage
);
