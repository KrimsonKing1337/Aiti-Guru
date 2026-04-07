import type { FetchProductsParams } from 'api/@types';

export const productFetchDefaultParams: FetchProductsParams = {
  limit: 10,
  skip: 0,
  sortBy: undefined,
  order: 'desc',
};
