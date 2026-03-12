import { call, select, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { loginFetch } from 'api';

import { loginMessagesRu } from 'utils';

import type { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

function* watchFetch() {
  try {
    const login: State['login'] = yield select(selectors.login);
    const password: State['password'] = yield select(selectors.password);
    const rememberMe: State['rememberMe'] = yield select(selectors.rememberMe);

    yield call(loginFetch, { login, password, rememberMe });
  } catch (e) {
    const error = e as string;
    const errorRu = loginMessagesRu[error];

    toast.error(errorRu);
  }
}

export function* watchActions() {
  yield takeLatest(actions.fetch, watchFetch);
}
