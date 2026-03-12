import type { AxiosError } from 'axios';

export type DummyJsonError = AxiosError<{ message: string }>;

export type DummyJsonAuthLoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

export type DummyJsonAuthRefreshResponse = Pick<DummyJsonAuthLoginResponse, 'accessToken' | 'refreshToken'>;
