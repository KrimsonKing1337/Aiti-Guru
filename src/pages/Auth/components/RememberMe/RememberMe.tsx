import { useSelector, useDispatch } from 'react-redux';

import SquareIcon from 'assets/icons/square.svg';
import SquareCheckedIcon from 'assets/icons/square-checked.svg';

import { loginActions, loginSelectors } from 'store/login';

import * as styles from './RememberMe.scss';

export const RememberMe = () => {
  const dispatch = useDispatch();

  const isChecked = useSelector(loginSelectors.rememberMe);

  const wrapperClickHandler = () => {
    dispatch(loginActions.setRememberMe(!isChecked));
  };

  const Icon = isChecked ? SquareCheckedIcon : SquareIcon;

  return (
    <div className={styles.Wrapper} onClick={wrapperClickHandler}>
      <div className={styles.Checkbox}>
        <Icon />
      </div>

      <div className={styles.Label}>
        Запомнить данные
      </div>
    </div>
  );
};
