import type { PropsWithChildren } from 'react';

import * as styles from './Desc.scss';

export const Desc = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.Wrapper}>
      {children}
    </div>
  );
};
