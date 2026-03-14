import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './Checkbox.scss';

export type CheckboxProps = PropsWithChildren & {
  className?: string;
  isChecked?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export const Checkbox = ({
  children,
  className = '',
  isChecked,
  onClick = () => {},
}: CheckboxProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isChecked]: isChecked,
    [className]: !!className,
  });

  return (
    <div className={wrapperClassNames} onClick={onClick}>
      {children}
    </div>
  );
};
