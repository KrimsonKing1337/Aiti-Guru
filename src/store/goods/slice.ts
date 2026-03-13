import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { FetchProductsParams } from 'api/@types';

import type { State } from './@types';

export const initialState: State = {
  products: null,
  search: '',
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
    setSearch(state, action: PayloadAction<State['search']>) {
      state.search = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    productsFetch(state, _action: PayloadAction<FetchProductsParams>) {
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
