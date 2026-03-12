import axios from 'axios';

import type { DummyJsonError } from './@types';

export type LoginFetch = {
  login: string;
  password: string;
  rememberMe: boolean;
}

/*
  чтобы не вбивать каждый раз правильный логин и пароль,
  я использую сокращённый вариант 777
*/

export const loginFetch = async ({ login, password }: LoginFetch) => {
  let username = login;
  let pass = password;

  if (login === '777' && password === '777') {
    username = 'emilys';
    pass = 'emilyspass';
  }

  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password: pass,
      credentials: 'include',
    });

    return response.data;
  } catch (e) {
    const error = e as DummyJsonError;

    throw new Error(error?.response?.data?.message);
  }
};
