import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Outlet, useLocation } from 'react-router';

import { authActions, authSelectors } from 'store/auth';

import { Wrapper } from 'components';

import * as styles from './Main.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isInited = useSelector(authSelectors.isInited);
  const isAuthed = useSelector(authSelectors.isAuthed);

  useEffect(() => {
    if (!isInited) {
      dispatch(authActions.authMeFetch());
    }
  }, [isInited]);

  if (!isInited) {
    return (
      <Wrapper wrapperClassName={styles.Wrapper}>
        <div className={styles.Loader} />
      </Wrapper>
    );
  }

  const path = location.pathname;

  if (!isAuthed && path !== '/auth') {
    return (
      <Navigate to="/auth" replace />
    );
  }

  if (isAuthed && (path === '/' || path === '/auth')) {
    return (
      <Navigate to="/goods" replace />
    );
  }

  return (
    <Outlet />
  );
};
