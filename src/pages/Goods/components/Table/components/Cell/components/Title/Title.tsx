import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

export type TitleProps = PropsWithChildren & {
  style?: React.CSSProperties;
  className?: string;
  isThin?: boolean;
};

import * as styles from './Title.scss';

export const Title = ({ children, style = {}, className = '', isThin = false }: TitleProps) => {
  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [styles.isThin]: isThin,
    [className]: !!className,
  });

  return (
    <div style={style} className={wrapperClassNames}>
      {children}
    </div>
  );
};
