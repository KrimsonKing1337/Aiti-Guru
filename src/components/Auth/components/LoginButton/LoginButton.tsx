import { useDispatch } from 'react-redux';

import { loginActions } from 'store/login';

import * as styles from './LoginButton.scss';

export const LoginButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(loginActions.fetch());
  };

  return (
    <div className={styles.Wrapper} onClick={clickHandler}>
      Войти
    </div>
  );
};
