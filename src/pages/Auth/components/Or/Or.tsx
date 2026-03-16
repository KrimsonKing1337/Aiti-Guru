import { Sublabel } from 'components';

import { Line } from './components';

import * as styles from './Or.scss';

export const Or = () => {
  return (
    <div className={styles.Wrapper}>
      <Line />

      <Sublabel className={styles.Label}>
        или
      </Sublabel>

      <Line />
    </div>
  );
};
