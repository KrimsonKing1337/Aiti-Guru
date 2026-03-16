import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './H6.scss';

export type H6Props = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const H6 = ({ children, style, className = '' }: H6Props) => {
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
