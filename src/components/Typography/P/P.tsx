import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './P.scss';

export type PProps = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const P = ({ children, style, className = '' }: PProps) => {
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
