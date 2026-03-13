import axios from 'axios';

import {
  DummyJsonError,
  DummyJsonProductsResponse,
  FetchProductsParams,
  FetchProductsRequestParams,
} from './@types';

export const products = async ({
  limit,
  skip,
  sortBy,
  order,
  search,
}: FetchProductsParams) => {
  const requestParams: FetchProductsRequestParams = {
    limit,
    skip,
    sortBy,
    order,
  };

  if (search) {
    requestParams.q = search;
  }

  const url = search
    ? 'https://dummyjson.com/products/search'
    : 'https://dummyjson.com/products';

  try {
    const response = await axios.get<DummyJsonProductsResponse>(url, {
      params: requestParams,
    });

    return response.data;
  } catch (e) {
    throw e as DummyJsonError;
  }
};
