import type { DummyJsonError } from 'api/@types';

export interface State {
  login: string;
  password: string;
  rememberMe: boolean;
  isFetchSuccess: boolean | null;
  fetchError: DummyJsonError | null;
}
