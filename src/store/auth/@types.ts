export interface State {
  login: string;
  password: string;
  isInited: boolean;
  isAuthed: boolean | null;
  isFetching: boolean;
  isFetchSuccess: boolean | null;
  fetchError: string | null;
}
