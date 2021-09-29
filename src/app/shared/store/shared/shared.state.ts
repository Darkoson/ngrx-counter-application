export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
}

export const SharedInitialState: SharedState = {
  showLoading: false,
  errorMessage: '',
};
