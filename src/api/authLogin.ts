import axios from 'axios';

import type { DummyJsonError, DummyJsonAuthLoginResponse } from './@types';

export type LoginFetch = {
  login: string;
  password: string;
}

/*
  чтобы не вбивать каждый раз правильный логин и пароль,
  я использую сокращённый вариант 777
*/

export const authLogin = async ({ login, password }: LoginFetch) => {
  let username = login;
  let pass = password;

  if (login === '777' && password === '777') {
    username = 'emilys';
    pass = 'emilyspass';
  }

  try {
    const response = await axios.post<DummyJsonAuthLoginResponse>('https://dummyjson.com/auth/login', {
      username,
      password: pass,
      credentials: 'include',
    });

    return response.data;
  } catch (e) {
    throw e as DummyJsonError;
  }
};
