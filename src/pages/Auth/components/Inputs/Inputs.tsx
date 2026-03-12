import { InputLogin, InputPassword } from './components';

import * as styles from './Inputs.scss';

export const Inputs = () => {
  return (
    <div className={styles.Wrapper}>
      <InputLogin />
      <InputPassword />
    </div>
  );
};
