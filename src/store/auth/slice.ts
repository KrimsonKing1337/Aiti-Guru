import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  login: '',
  password: '',
  isAuthed: null,
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
    setAuthed(state, action: PayloadAction<State['isAuthed']>) {
      state.isAuthed = action.payload;
    },

    authLoginFetch(state) {
      state.isFetching = true;
    },
    authMeFetch(state) {
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
