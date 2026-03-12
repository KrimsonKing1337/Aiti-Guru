import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  login: '',
  password: '',
  rememberMe: false,
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

    fetch() {},
    fetchSuccess(state, action: PayloadAction<State['isFetchSuccess']>) {
      state.isFetchSuccess = action.payload;
    },
    fetchError(state, action: PayloadAction<State['fetchError']>) {
      state.fetchError = action.payload;
    },
  },
});

export const { reducer, actions } = slice;
