import type { RootState } from '../store';

export const selectors = {
  login: (state: RootState) => state.login.login,
  password: (state: RootState) => state.login.password,
  rememberMe: (state: RootState) => state.login.rememberMe,
  isFetching: (state: RootState) => state.login.isFetching,
  isFetchSuccess: (state: RootState) => state.login.isFetchSuccess,
  fetchError: (state: RootState) => state.login.fetchError,
};
