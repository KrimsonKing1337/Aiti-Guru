import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './Label.scss';

export type LabelProps = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const Label = ({ children, style, className = '' }: LabelProps) => {
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
