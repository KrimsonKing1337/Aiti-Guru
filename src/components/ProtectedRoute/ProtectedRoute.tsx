import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Outlet } from 'react-router';

import { authActions, authSelectors } from 'store/auth';

import { Wrapper } from 'components';

import * as styles from '../../pages/Main/Main.scss';

export const ProtectedRoute = () => {
  const dispatch = useDispatch();

  const isInited = useSelector(authSelectors.isInited);
  const isAuthed = useSelector(authSelectors.isAuthed);

  useEffect(() => {
    if (!isInited) {
      dispatch(authActions.authMeFetch());
    }
  }, [dispatch, isInited]);

  if (!isInited) {
    return (
      <Wrapper wrapperClassName={styles.Wrapper}>
        <div className={styles.Loader} />
      </Wrapper>
    );
  }

  if (!isAuthed) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};
