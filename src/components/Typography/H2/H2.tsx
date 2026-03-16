import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './H2.scss';

export type H2Props = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const H2 = ({ children, style, className = '' }: H2Props) => {
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
