import { call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import type { PayloadAction } from '@reduxjs/toolkit';

import type {
  DummyJsonProductsResponse,
  FetchProductsParams,
} from 'api/@types';

import { products as fetchProducts, isApiError, getApiErrorMessage } from 'api';

import { actions } from './slice';

function* watchProductsFetch(action: PayloadAction<FetchProductsParams>) {
  const fetchProductsParams = action.payload;

  yield put(actions.fetchSuccess(null));
  yield put(actions.fetchError(null));

  try {
    const data: DummyJsonProductsResponse = yield call(fetchProducts, fetchProductsParams);

    yield put(actions.setProducts(data));
    yield put(actions.fetchSuccess(true));
  } catch (e) {
    const err = getApiErrorMessage(e);
    const error = isApiError(err) ? err : null;

    yield put(actions.fetchError(error));
    yield put(actions.fetchSuccess(false));

    yield call(toast.error, error);
  }
}

export function* watchActions() {
  yield takeLatest(actions.productsFetch, watchProductsFetch);
}
