import PlusIcon from 'assets/icons/plus.svg';
import DotsIcon from 'assets/icons/dots-circle.svg';

import * as styles from './Actions.scss';

export const Actions = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.AddButton}>
        <PlusIcon />
      </div>

      <div className={styles.DotsButton}>
        <DotsIcon />
      </div>
    </div>
  );
};
