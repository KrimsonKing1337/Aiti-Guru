import { H5 } from 'components';

import * as styles from './Info.scss';

export type InfoProps = {
  start: number;
  end: number;
  totalRows: number;
};

export const Info = ({ start, end, totalRows }: InfoProps) => {
  return (
    <H5 className={styles.Wrapper}>
      <span>
        Показано
      </span>

      <span className={styles.DarkItem}>
        {start}-{end}
      </span>

      <span>
        из
      </span>

      <span className={styles.DarkItem}>
        {totalRows}
      </span>
    </H5>
  );
};
