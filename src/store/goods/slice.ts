import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { State } from './@types';

export const initialState: State = {
  products: [],
  isFetching: false,
  isFetchSuccess: null,
  fetchError: null,
};

const slice = createSlice({
  name: '@goods',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<State['products']>) {
      state.products = action.payload;
    },

    productsFetch(state) {
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
