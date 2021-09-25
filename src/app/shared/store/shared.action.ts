import { createAction, props } from "@ngrx/store";
import { SharedType } from "./shared.type";

export const LoadingSpinnerAction = createAction(SharedType.LOADING_SPINNER, props<{status:boolean}>());