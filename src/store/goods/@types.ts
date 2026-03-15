import { DummyJsonError, DummyJsonProductsResponse } from 'api/@types';

export interface State {
  products: DummyJsonProductsResponse | null;
  search: string;
  isFetching: boolean;
  isFetchSuccess: boolean | null;
  fetchError: DummyJsonError | null;
  isModalActive: boolean;
}
