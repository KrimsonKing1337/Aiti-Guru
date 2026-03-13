import axios from 'axios';

import { DummyJsonError, DummyJsonProductsResponse, FetchProductParams } from './@types';

export const products = async ({
  limit,
  skip,
  sortBy,
  order,
}: FetchProductParams) => {
  const requestParams = {
    limit,
    skip,
    sortBy,
    order,
  };

  try {
    const response = await axios.get<DummyJsonProductsResponse>('https://dummyjson.com/products', {
      params: requestParams,
    });

    return response.data;
  } catch (e) {
    throw e as DummyJsonError;
  }
};
