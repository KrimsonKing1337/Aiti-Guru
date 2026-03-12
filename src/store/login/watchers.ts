import { call, select, takeLatest } from 'redux-saga/effects';

import { loginFetch } from 'api';

import type { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';

function* watchFetch() {
  const login: State['login'] = yield select(selectors.login);
  const password: State['password'] = yield select(selectors.password);
  const rememberMe: State['rememberMe'] = yield select(selectors.rememberMe);

  yield call(loginFetch, { login, password, rememberMe });
}

export function* watchActions() {
  yield takeLatest(actions.fetch, watchFetch);
}
