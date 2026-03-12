import { call, put, select, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import type { DummyJsonError, DummyJsonAuthLoginResponse, DummyJsonAuthRefreshResponse } from 'api/@types';
import { authLogin, authMe, authRefresh } from 'api';

import { loginMessagesRu } from 'utils';

import type { State } from './@types';

import { actions } from './slice';
import { selectors } from './selectors';
import { setTokens } from './utils';

function* onAuthError(e: unknown) {
  const err = e as DummyJsonError;

  yield put(actions.fetchError(err));
  yield put(actions.fetchSuccess(false));
  yield put(actions.setAuthed(false));
}

function* setTokensShared(accessToken: string, refreshToken: string) {
  const rememberMe = localStorage.getItem('rememberMe') === 'true';

  const storageKey = rememberMe ? 'local' : 'session';

  yield call(setTokens, {
    accessToken,
    refreshToken,
    storageKey,
  });
}

function* watchAuthLoginFetch() {
  yield put(actions.fetchSuccess(null));
  yield put(actions.fetchError(null));

  try {
    const login: State['login'] = yield select(selectors.login);
    const password: State['password'] = yield select(selectors.password);

    const { accessToken, refreshToken }: DummyJsonAuthLoginResponse = yield call(authLogin, { login, password });

    yield put(actions.fetchSuccess(true));

    yield setTokensShared(accessToken, refreshToken);
  } catch (e) {
    const err = e as DummyJsonError;

    const error = err?.response?.data?.message as string;
    const errorRu = loginMessagesRu[error];

    yield onAuthError(e);
    yield call(toast.error, errorRu);
  }
}

function* watchAuthMeFetch() {
  yield put(actions.fetchSuccess(null));
  yield put(actions.fetchError(null));

  try {
    yield call(authMe);

    yield put(actions.fetchSuccess(true));
    yield put(actions.setAuthed(true));

    return;
  } catch (e) {
    const err = e as DummyJsonError;

    yield put(actions.fetchError(err));
  }

  try {
    const { accessToken, refreshToken }: DummyJsonAuthRefreshResponse = yield call(authRefresh);

    yield put(actions.fetchSuccess(true));

    yield setTokensShared(accessToken, refreshToken);

    yield put(actions.setAuthed(true));
  } catch (e) {
    yield onAuthError(e);
  }
}

export function* watchActions() {
  yield takeLatest(actions.authLoginFetch, watchAuthLoginFetch);
  yield takeLatest(actions.authMeFetch, watchAuthMeFetch);
}
