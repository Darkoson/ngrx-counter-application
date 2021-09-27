import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateStorageKeys as sk } from 'src/app/app-storage.key';
import { AuthState } from './auth.state';

const _authSelector$ = createFeatureSelector<AuthState>(sk.AUTH);

export const isAuthenticatedSlector$ = createSelector(_authSelector$, state =>state.user ? true:false)

export const userTokenSlector$ = createSelector(_authSelector$, state =>state.user ? state.user.token : null)
