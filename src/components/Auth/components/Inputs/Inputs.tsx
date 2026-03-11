import { Input } from './components';

import * as styles from './Inputs.scss';

export const Inputs = () => {
  return (
    <div className={styles.Wrapper}>
      <Input label="Логин" />
      <Input label="Пароль" />
    </div>
  );
};
