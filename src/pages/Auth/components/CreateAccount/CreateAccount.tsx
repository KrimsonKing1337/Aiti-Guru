import * as styles from './CreateAccount.scss';

export const CreateAccount = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Label}>
        Нет аккаунта?
      </div>

      <div role="button" className={styles.Button} aria-label="Создать аккаунт">
        Создать
      </div>
    </div>
  );
};
