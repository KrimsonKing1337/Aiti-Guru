import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

import * as styles from './Subtitle.scss';

export type SubtitleProps = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
};

export const Subtitle = ({ children, style, className = '' }: SubtitleProps) => {
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
