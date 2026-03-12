import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  login: '',
  password: '',
  rememberMe: false,
  isFetching: false,
  isFetchSuccess: null,
  fetchError: null,
};

const slice = createSlice({
  name: '@login',
  initialState,
  reducers: {
    setLogin(state, action: PayloadAction<State['login']>) {
      state.login = action.payload;
    },
    setPassword(state, action: PayloadAction<State['password']>) {
      state.password = action.payload;
    },
    setRememberMe(state, action: PayloadAction<State['rememberMe']>) {
      state.rememberMe = action.payload;
    },

    fetch(state) {
      state.isFetching = true;
    },
    fetchSuccess(state, action: PayloadAction<State['isFetchSuccess']>) {
      state.isFetchSuccess = action.payload;

      if (action.payload !== null) {
        state.isFetching = false;
      }
    },
    fetchError(state, action: PayloadAction<State['fetchError']>) {
      state.fetchError = action.payload;

      if (action.payload !== null) {
        state.isFetching = false;
      }
    },
  },
});

export const { reducer, actions } = slice;
