import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { loginReducer, watchLoginActions } from './login';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  login: loginReducer,
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

export type RootState = ReturnType<typeof store.getState>;
