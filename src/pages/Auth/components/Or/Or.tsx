import { Line } from './components';

import * as styles from './Or.scss';

export const Or = () => {
  return (
    <div className={styles.Wrapper}>
      <Line />

      <div className={styles.Label}>
        или
      </div>

      <Line />
    </div>
  );
};
