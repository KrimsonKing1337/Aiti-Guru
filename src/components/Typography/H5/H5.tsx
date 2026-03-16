import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './H5.scss';

export type H5Props = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const H5 = ({ children, style, className = '' }: H5Props) => {
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
