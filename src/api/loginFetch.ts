import axios from 'axios';

export type LoginFetch = {
  login: string;
  password: string;
  rememberMe: boolean;
}

export const loginFetch = async ({ login, password, rememberMe }: LoginFetch) => {
  const response = await axios.post('https://dummyjson.com/auth/login', {
    login,
    password,
    rememberMe,
  });

  return response.data;
};
