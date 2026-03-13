import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { loginReducer, watchLoginActions } from './login';
import { goodsReducer, watchGoodsActions } from './goods';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  login: loginReducer,
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

sagaMiddleware.run(watchLoginActions);
sagaMiddleware.run(watchGoodsActions);

export type RootState = ReturnType<typeof store.getState>;
