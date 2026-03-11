import {
  Inputs,
  RememberMe,
  Actions,
} from '../';

import * as styles from './Dashboard.scss';

export const Dashboard = () => {
  return (
    <div className={styles.Wrapper}>
      <Inputs />
      <RememberMe />
      <Actions />
    </div>
  );
};
