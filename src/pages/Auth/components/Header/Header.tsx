import * as styles from './Header.scss';

export const Header = () => {
  return (
    <div>
      <div className={styles.Title}>
        Добро пожаловать!
      </div>

      <div className={styles.Subtitle}>
        Пожалуйста, авторизируйтесь {/* todo: авторизуйтесь? */}
      </div>
    </div>
  );
};
