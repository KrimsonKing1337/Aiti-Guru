import { H1, Subtitle } from 'components';

import * as styles from './Header.scss';

export const Header = () => {
  return (
    <div>
      <H1 className={styles.Title}>
        Добро пожаловать!
      </H1>

      <Subtitle className={styles.Subtitle}>
        Пожалуйста, авторизируйтесь {/* todo: авторизуйтесь? */}
      </Subtitle>
    </div>
  );
};
