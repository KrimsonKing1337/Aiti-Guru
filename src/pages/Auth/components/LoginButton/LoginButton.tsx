import { useEffect } from 'react';

import { useNavigate } from 'react-router';

import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import LoadingIcon from 'assets/icons/loading-for-button.svg';

import { loginActions, loginSelectors } from 'store/login';

import * as styles from './LoginButton.scss';

export const LoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector(loginSelectors.login);
  const password = useSelector(loginSelectors.password);
  const isFetching = useSelector(loginSelectors.isFetching);
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

    dispatch(loginActions.authLoginFetch());
  };

  const content = isFetching ? <LoadingIcon className={styles.LoadingIcon} /> : 'Войти';

  return (
    <div className={styles.Wrapper} onClick={clickHandler}>
      {content}
    </div>
  );
};
