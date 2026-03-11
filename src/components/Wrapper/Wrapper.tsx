import type { PropsWithChildren } from 'react';

import * as styles from './Wrapper.scss';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.Wrapper}>
      {children}
    </div>
  );
};
