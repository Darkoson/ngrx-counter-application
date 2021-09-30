import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateStorageKeys as sk } from 'src/app/app-storage.key';
import { RouterStateUrl } from './custom-serializer';

export const routerFeatureSelector$ = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>(sk.ROUTER);

export const currentRouteSelector$ = createSelector(
    routerFeatureSelector$, (route) => route.state
);
