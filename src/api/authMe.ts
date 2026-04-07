import axios from 'axios';

import { getStorage } from 'utils';

import type { DummyJsonAuthLoginResponse } from './@types';

export const authMe = async () => {
  const storage = getStorage();
  const accessToken = storage.getItem('accessToken');

  const response = await axios.get<DummyJsonAuthLoginResponse>('https://dummyjson.com/auth/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
