import { call, put, select, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import { loginFetch } from 'api';

import type { DummyJsonError, DummyJsonAuthLoginResponse } from 'api/@types';

import { loginMessagesRu } from 'utils';

import type { State } from './@types';
import { actions } from './slice';
import { selectors } from './selectors';
import { setTokens } from './utils';

function* watchFetch() {
  yield put(actions.fetchSuccess(null));
  yield put(actions.fetchError(null));

  try {
    const login: State['login'] = yield select(selectors.login);
    const password: State['password'] = yield select(selectors.password);
    const rememberMe: State['rememberMe'] = yield select(selectors.rememberMe);

    const { accessToken, refreshToken }: DummyJsonAuthLoginResponse = yield call(loginFetch, { login, password });

    yield put(actions.fetchSuccess(true));

    const storageKey = rememberMe ? 'local' : 'session';

    setTokens({
      accessToken,
      refreshToken,
      storageKey,
    });
  } catch (e) {
    const err = e as DummyJsonError;

    const error = err?.response?.data?.message as string;
    const errorRu = loginMessagesRu[error];

    yield put(actions.fetchError(err));
    yield put(actions.fetchSuccess(false));

    yield toast.error(errorRu);
  }
}

export function* watchActions() {
  yield takeLatest(actions.fetch, watchFetch);
}
