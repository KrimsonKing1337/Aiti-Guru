import type { Svg } from '@types';

import classNames from 'classnames';

import { Button } from 'components';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  inputWrapperClassName?: string;
  inputIconClassName?: string;
  value: string;
  setValue: (value: string) => void;
  label: string;
  placeholder: string;
  type?: string;
  ariaLabel?: string;
  Icon?: Svg;
  ActionIcon?: Svg;
  actionIconAriaLabel?: string;
  onActionIconClick?: () => void;
};

import * as styles from './Input.scss';

export const Input = ({
  className = '',
  wrapperClassName = '',
  labelClassName = '',
  inputWrapperClassName = '',
  inputIconClassName = '',
  value,
  setValue,
  label,
  placeholder,
  type = 'text',
  ariaLabel = '',
  Icon,
  ActionIcon,
  actionIconAriaLabel = '',
  onActionIconClick = () => {},
  ...etc
}: InputProps) => {
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const wrapperClassNames = classNames({
    [wrapperClassName]: !!wrapperClassName,
  });

  const labelClassNames = classNames({
    [styles.Label]: true,
    [labelClassName]: !!labelClassName,
  });

  const inputWrapperClassNames = classNames({
    [styles.InputWrapper]: true,
    [inputWrapperClassName]: !!inputWrapperClassName,
  });

  const inputClassNames = classNames({
    [styles.Input]: true,
    [styles.withoutIcon]: !Icon,
    [className]: !!className,
  });

  const inputIconClassNames = classNames({
    [styles.Icon]: true,
    [inputIconClassName]: !!inputIconClassName,
  });

  return (
    <label className={wrapperClassNames}>
      <div className={labelClassNames}>
        {label}
      </div>

      <div className={inputWrapperClassNames}>
        {Icon && (
          <div className={inputIconClassNames}>
            <Icon />
          </div>
        )}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className={inputClassNames}
          aria-label={ariaLabel}
          onChange={inputChangeHandler}
          {...etc}
        />

        {ActionIcon && (
          <Button className={styles.ActionIcon} ariaLabel={actionIconAriaLabel} onClick={onActionIconClick}>
            <ActionIcon />
          </Button>
        )}
      </div>
    </label>
  );
};
