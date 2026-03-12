import type { PropsWithChildren } from 'react';

import classNames from 'classnames';

export type WrapperProps = PropsWithChildren & {
  className?: string;
  extraWrapperClassName?: string;
  wrapperClassName?: string;
};

import * as styles from './Wrapper.scss';

export const Wrapper = ({
  children,
  className = '',
  extraWrapperClassName = '',
  wrapperClassName = '',
}: WrapperProps) => {
  const mainWrapperCassNames = classNames({
    [styles.MainWrapper]: true,
    [className]: !!className,
  });

  const extraWrapperClassNames = classNames({
    [styles.ExtraWrapper]: true,
    [extraWrapperClassName]: !!extraWrapperClassName,
  });

  const wrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [wrapperClassName]: !!wrapperClassName,
  });

  return (
    <div className={mainWrapperCassNames}>
      <div className={extraWrapperClassNames}>
        <div className={wrapperClassNames}>
          {children}
        </div>
      </div>
    </div>
  );
};
