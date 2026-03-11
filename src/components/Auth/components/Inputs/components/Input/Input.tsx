import { useState } from 'react';

export type InputProps = {
  label: string;
};

import * as styles from './Input.scss';

export const Input = ({ label }: InputProps) => {
  const [value, setValue] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label className={styles.Wrapper}>
      <div className={styles.Label}>
        {label}
      </div>

      <input
        type="text"
        name={label}
        value={value}
        className={styles.Input}
        onChange={changeHandler}
      />
    </label>
  );
};
