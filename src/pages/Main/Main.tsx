import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import { loginActions, loginSelectors } from 'store/login';

import { Wrapper } from 'components';

import * as styles from './Main.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthed = useSelector(loginSelectors.isAuthed);
  const isFetchSuccess = useSelector(loginSelectors.isFetchSuccess);

  useEffect(() => {
    dispatch(loginActions.authMeFetch());
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
