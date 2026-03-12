import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import { loginActions, loginSelectors } from 'store/login';

import * as styles from './LoginButton.scss';

export const LoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector(loginSelectors.login);
  const password = useSelector(loginSelectors.password);
  const isFetchSuccess = useSelector(loginSelectors.isFetchSuccess);

  useEffect(() => {
    if (isFetchSuccess) {
      navigate('/goods');
    }
  }, [isFetchSuccess]);

  const clickHandler = () => {
    if (!login || !password) {
      toast.error('Поля логин и пароль обязательны для заполнения');

      return;
    }

    dispatch(loginActions.fetch());
  };

  return (
    <div className={styles.Wrapper} onClick={clickHandler}>
      Войти
    </div>
  );
};
