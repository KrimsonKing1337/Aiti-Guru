import type { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren & {
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  onClick?: () => void;
};

import classNames from 'classnames';

import * as styles from './Button.scss';

export const Button = ({
  children,
  style = {},
  className = '',
  type = 'button',
  ariaLabel = '',
  disabled = false,
  onClick = () => {},
}: ButtonProps) => {
  const buttonClassNames = classNames({
    [styles.Button]: true,
    [className]: !!className,
  });

  return (
    <button
      type={type}
      style={style}
      className={buttonClassNames}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
