import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { authReducer, watchAuthActions } from './auth';
import { goodsReducer, watchGoodsActions } from './goods';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  auth: authReducer,
  goods: goodsReducer,
};

const middlewares = [
  sagaMiddleware,
];

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(middlewares),
});

sagaMiddleware.run(watchAuthActions);
sagaMiddleware.run(watchGoodsActions);

export type RootState = ReturnType<typeof store.getState>;
