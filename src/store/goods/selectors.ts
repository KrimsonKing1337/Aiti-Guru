import type { RootState } from '../store';

export const selectors = {
  products: (state: RootState) => state.goods.products,
  isFetching: (state: RootState) => state.goods.isFetching,
  isFetchSuccess: (state: RootState) => state.goods.isFetchSuccess,
  fetchError: (state: RootState) => state.goods.fetchError,
};
