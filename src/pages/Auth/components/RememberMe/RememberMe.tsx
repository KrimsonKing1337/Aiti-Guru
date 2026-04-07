import { useEffect, useState } from 'react';

import { Checkbox, Sublabel } from 'components';

import { getRememberMe, setRememberMe } from 'utils';

import * as styles from './RememberMe.scss';

export const RememberMe = () => {
  const [isCheckedState, setIsCheckedState] = useState(false);

  useEffect(() => {
    const isChecked = getRememberMe();

    setIsCheckedState(isChecked);
  }, []);

  useEffect(() => {
    setRememberMe(isCheckedState);
  }, [isCheckedState]);

  const wrapperClickHandler = () => {
    setIsCheckedState(!isCheckedState);
  };

  return (
    <div className={styles.Wrapper} onClick={wrapperClickHandler}>
      <Checkbox className={styles.Checkbox} isChecked={isCheckedState} onClick={wrapperClickHandler} />

      <Sublabel className={styles.Label}>
        Запомнить данные
      </Sublabel>
    </div>
  );
};
