import { useEffect, useState } from 'react';

import SquareIcon from 'assets/icons/square.svg';
import SquareCheckedIcon from 'assets/icons/square-checked.svg';

import * as styles from './RememberMe.scss';

export const RememberMe = () => {
  const [isCheckedState, setIsCheckedState] = useState(false);

  useEffect(() => {
    const isChecked = localStorage.getItem('rememberMe') === 'true';

    setIsCheckedState(isChecked);
  }, []);

  useEffect(() => {
    localStorage.setItem('rememberMe', isCheckedState.toString());
  }, [isCheckedState]);

  const wrapperClickHandler = () => {
    setIsCheckedState(!isCheckedState);
  };

  const Icon = isCheckedState ? SquareCheckedIcon : SquareIcon;

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
