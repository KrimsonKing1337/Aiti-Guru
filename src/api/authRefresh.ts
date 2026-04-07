import axios from 'axios';

import { getStorage } from 'utils';

import type { DummyJsonError, DummyJsonAuthRefreshResponse } from './@types';

export const authRefresh = async () => {
  const storage = getStorage();
  const refreshToken = storage.getItem('refreshToken');

  try {
    const response = await axios.post<DummyJsonAuthRefreshResponse>('https://dummyjson.com/auth/refresh', {
      refreshToken,
    });

    return response.data;
  } catch (e) {
    throw e as DummyJsonError;
  }
};
