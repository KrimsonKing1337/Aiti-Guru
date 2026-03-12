import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';

import { loginActions, loginSelectors } from 'store/login';

import * as styles from './LoginButton.scss';

export const LoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFetchSuccess = useSelector(loginSelectors.isFetchSuccess);

  useEffect(() => {
    if (isFetchSuccess) {
      navigate('/goods');
    }
  }, [isFetchSuccess]);

  const clickHandler = () => {
    dispatch(loginActions.fetch());
  };

  return (
    <div className={styles.Wrapper} onClick={clickHandler}>
      Войти
    </div>
  );
};
