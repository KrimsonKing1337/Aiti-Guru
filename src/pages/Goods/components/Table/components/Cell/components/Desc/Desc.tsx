import type { PropsWithChildren } from 'react';

import { Label } from 'components';

import * as styles from './Desc.scss';

export const Desc = ({ children }: PropsWithChildren) => {
  return (
    <Label className={styles.Wrapper}>
      {children}
    </Label>
  );
};
