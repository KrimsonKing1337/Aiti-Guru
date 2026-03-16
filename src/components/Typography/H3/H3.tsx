import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './H3.scss';

export type H3Props = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const H3 = ({ children, style, className = '' }: H3Props) => {
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
