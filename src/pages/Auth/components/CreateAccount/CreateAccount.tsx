import { Subtitle } from 'components';

import * as styles from './CreateAccount.scss';

export const CreateAccount = () => {
  return (
    <div className={styles.Wrapper}>
      <Subtitle className={styles.Label}>
        Нет аккаунта?
      </Subtitle>

      <div role="button" aria-label="Создать аккаунт">
        <Subtitle className={styles.Button}>
          Создать
        </Subtitle>
      </div>
    </div>
  );
};
