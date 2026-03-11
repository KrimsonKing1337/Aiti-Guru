import type { PropsWithChildren } from 'react';

export type WrapperProps = PropsWithChildren;

import * as styles from './Wrapper.scss';

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className={styles.ExtraWrapper}>
      <div className={styles.Wrapper}>
        {children}
      </div>
    </div>
  );
};
