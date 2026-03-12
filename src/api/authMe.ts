import axios from 'axios';

import type { DummyJsonError, DummyJsonAuthLoginResponse } from './@types';

export const authMe = async () => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios.get<DummyJsonAuthLoginResponse>('https://dummyjson.com/auth/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (e) {
    throw e as DummyJsonError;
  }
};
