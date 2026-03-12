import { Svg } from 'types';

export type InputProps = {
  value: string;
  setValue: (value: string) => void;
  label: string;
  placeholder: string;
  type?: string;
  Icon: Svg;
  ActionIcon: Svg;
  onActionIconClick: () => void;
};

import * as styles from './Input.scss';

export const Input = ({
  value,
  setValue,
  label,
  placeholder,
  type = 'text',
  Icon,
  ActionIcon,
  onActionIconClick,
}: InputProps) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label className={styles.Wrapper}>
      <div className={styles.Label}>
        {label}
      </div>

      <div className={styles.InputWrapper}>
        <div className={styles.Icon}>
          <Icon />
        </div>

        <input
          type={type}
          name={label}
          value={value}
          placeholder={placeholder}
          className={styles.Input}
          onChange={inputChangeHandler}
        />

        <div className={styles.ActionIcon} onClick={onActionIconClick}>
          <ActionIcon />
        </div>
      </div>
    </label>
  );
};
