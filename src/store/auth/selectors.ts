import type { RootState } from '../store';

export const selectors = {
  login: (state: RootState) => state.auth.login,
  password: (state: RootState) => state.auth.password,
  isInited: (state: RootState) => state.auth.isInited,
  isAuthed: (state: RootState) => state.auth.isAuthed,
  isFetching: (state: RootState) => state.auth.isFetching,
  isFetchSuccess: (state: RootState) => state.auth.isFetchSuccess,
  fetchError: (state: RootState) => state.auth.fetchError,
};
