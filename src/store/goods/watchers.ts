import { call, put, takeLatest } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import type { PayloadAction } from '@reduxjs/toolkit';

import type { DummyJsonError, DummyJsonProductsResponse, FetchProductParams } from 'api/@types';
import { products as fetchProducts } from 'api';

import { actions } from './slice';

function* watchProductsFetch(action: PayloadAction<FetchProductParams>) {
  const fetchProductsParams = action.payload;

  yield put(actions.fetchSuccess(null));
  yield put(actions.fetchError(null));

  try {
    const data: DummyJsonProductsResponse = yield call(fetchProducts, fetchProductsParams);

    yield put(actions.setProducts(data));
    yield put(actions.fetchSuccess(true));
  } catch (e) {
    const err = e as DummyJsonError;

    const error = err?.response?.data?.message as string;

    yield put(actions.fetchError(err));
    yield put(actions.fetchSuccess(false));

    yield call(toast.error, error);
  }
}

export function* watchActions() {
  yield takeLatest(actions.productsFetch, watchProductsFetch);
}
