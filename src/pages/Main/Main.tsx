import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import { authActions, authSelectors } from 'store/auth';

import { Wrapper } from 'components';

import * as styles from './Main.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthed = useSelector(authSelectors.isAuthed);
  const isFetchSuccess = useSelector(authSelectors.isFetchSuccess);

  useEffect(() => {
    dispatch(authActions.authMeFetch());
  }, []);

  useEffect(() => {
    if (isAuthed === null || isFetchSuccess === null) {
      return;
    }

    if (isAuthed && isFetchSuccess) {
      navigate('/goods');
    } else {
      navigate('/auth');
    }
  }, [isAuthed, isFetchSuccess]);

  return (
    <Wrapper wrapperClassName={styles.Wrapper}>
      <div className={styles.Loader} />
    </Wrapper>
  );
};
