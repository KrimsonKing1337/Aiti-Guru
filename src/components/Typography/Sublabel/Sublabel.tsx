import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './Sublabel.scss';

export type SublabelProps = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const Sublabel = ({ children, style, className = '' }: SublabelProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div style={style} className={wrapperClassNames}>
      {children}
    </div>
  );
};
