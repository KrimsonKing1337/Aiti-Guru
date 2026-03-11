import { useState } from 'react';

import SquareIcon from 'assets/icons/square.svg';
import SquareCheckedIcon from 'assets/icons/square-checked.svg';

import * as styles from './RememberMe.scss';

export const RememberMe = () => {
  const [isChecked, setIsChecked] = useState(false);

  const wrapperClickHandler = () => {
    setIsChecked(!isChecked);
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
