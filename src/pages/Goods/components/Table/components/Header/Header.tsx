import PlusIcon from 'assets/icons/plus-circle.svg';
import ArrowsIcon from 'assets/icons/arrows-clockwise.svg';

import * as styles from './Header.scss';

export const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Label}>
        Все позиции
      </div>

      <div className={styles.Buttons}>
        <div className={styles.RefreshButton}>
          <ArrowsIcon />
        </div>

        <div className={styles.AddButton}>
          <PlusIcon />

          <span>
            Добавить
          </span>
        </div>
      </div>
    </div>
  );
};
