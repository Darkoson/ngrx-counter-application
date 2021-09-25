import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreType } from 'src/app/store.type';
import { AuthState } from './auth.state';

const _authSelector$ = createFeatureSelector<AuthState>(StoreType.AUTH);

export const isAuthenticatedSlector$ = createSelector(_authSelector$, state =>state.user ? true:false)
