import * as styles from './CreateAccount.scss';

export const CreateAccount = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Label}>
        Нет аккаунта?
      </div>

      <div className={styles.Button}>
        Создать
      </div>
    </div>
  );
};
