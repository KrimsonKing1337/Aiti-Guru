import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router';

import { toast } from 'react-toastify';

import LoadingIcon from 'assets/icons/loading-for-button.svg';

import { authActions, authSelectors } from 'store/auth';

import { Button } from 'components';

import * as styles from './LoginButton.scss';

export const LoginButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useSelector(authSelectors.login);
  const password = useSelector(authSelectors.password);
  const isFetching = useSelector(authSelectors.isFetching);
  const isFetchSuccess = useSelector(authSelectors.isFetchSuccess);

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

    dispatch(authActions.authLoginFetch());
  };

  const content = isFetching ? <LoadingIcon className={styles.LoadingIcon} /> : 'Войти';

  return (
    <Button className={styles.Button} onClick={clickHandler}>
      {content}
    </Button>
  );
};
