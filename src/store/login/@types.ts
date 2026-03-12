import type { DummyJsonError } from 'api/@types';

export interface State {
  login: string;
  password: string;
  isAuthed: boolean | null;
  isFetching: boolean;
  isFetchSuccess: boolean | null;
  fetchError: DummyJsonError | null;
}
