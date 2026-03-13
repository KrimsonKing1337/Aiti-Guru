import * as styles from './Header.scss';

export const Header = () => {
  return (
    <div className={styles.Wrapper}>
      <div>
        Товары
      </div>

      <input placeholder="Найти" />
    </div>
  );
};
