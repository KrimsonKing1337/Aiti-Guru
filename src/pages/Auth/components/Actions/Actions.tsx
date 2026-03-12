import { LoginButton, Or, CreateAccount } from '../';

import * as styles from './Actions.scss';

export const Actions = () => {
  return (
    <div className={styles.Wrapper}>
      <LoginButton />
      <Or />
      <CreateAccount />
    </div>
  );
};
