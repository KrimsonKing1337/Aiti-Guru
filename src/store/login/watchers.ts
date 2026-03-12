import { call, put, select, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import type { DummyJsonError, DummyJsonAuthLoginResponse } from 'api/@types';
import { authLogin, authMe } from 'api';

import { loginMessagesRu } from 'utils';

import type { State } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';
import { setTokens } from './utils';

function* watchAuthLoginFetch() {
  yield put(actions.fetchSuccess(null));
  yield put(actions.fetchError(null));

  try {
    const login: State['login'] = yield select(selectors.login);
    const password: State['password'] = yield select(selectors.password);
    const rememberMe: State['rememberMe'] = yield select(selectors.rememberMe);

    const { accessToken, refreshToken }: DummyJsonAuthLoginResponse = yield call(authLogin, { login, password });

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

function* watchAuthMeFetch() {
  yield put(actions.fetchSuccess(null));
  yield put(actions.fetchError(null));

  try {
    yield call(authMe);

    yield put(actions.fetchSuccess(true));
    yield put(actions.setAuthed(true));
  } catch (e) {
    const err = e as DummyJsonError;

    yield put(actions.fetchError(err));
    yield put(actions.fetchSuccess(false));
    yield put(actions.setAuthed(false));
  }
}

export function* watchActions() {
  yield takeLatest(actions.authLoginFetch, watchAuthLoginFetch);
  yield takeLatest(actions.authMeFetch, watchAuthMeFetch);
}
