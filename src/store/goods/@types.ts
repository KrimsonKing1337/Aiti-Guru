import { DummyJsonError, DummyJsonProductsResponse } from 'api/@types';

export interface State {
  products: DummyJsonProductsResponse | null;
  isFetching: boolean;
  isFetchSuccess: boolean | null;
  fetchError: DummyJsonError | null;
}
