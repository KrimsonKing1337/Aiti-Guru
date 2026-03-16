import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './H1.scss';

export type H1Props = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const H1 = ({ children, style, className = '' }: H1Props) => {
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
