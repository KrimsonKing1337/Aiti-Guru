import { DummyJsonError, Product } from 'api/@types';

export interface State {
  products: Product[];
  isFetching: boolean;
  isFetchSuccess: boolean | null;
  fetchError: DummyJsonError | null;
}
