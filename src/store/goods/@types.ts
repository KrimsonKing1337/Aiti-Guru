import type { DummyJsonProductsResponse } from 'api/@types';

export interface State {
  products: DummyJsonProductsResponse | null;
  search: string;
  isFetching: boolean;
  isFetchSuccess: boolean | null;
  fetchError: string | null;
  isResetting: boolean;
  isModalActive: boolean;
}
