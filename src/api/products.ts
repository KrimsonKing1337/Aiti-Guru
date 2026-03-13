import axios from 'axios';

import type { DummyJsonError, DummyJsonProductsResponse } from './@types';

export const products = async () => {
  try {
    const response = await axios.get<DummyJsonProductsResponse>('https://dummyjson.com/auth/products');

    return response.data;
  } catch (e) {
    throw e as DummyJsonError;
  }
};
