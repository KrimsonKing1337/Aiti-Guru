import type { Table } from '@tanstack/table-core';

import type { Product } from 'api/@types';

import { Info, Buttons } from './components';

type PaginationProps = {
  table: Table<Product>;
  totalRows: number;
}

import * as styles from './Pagination.scss';

export const Pagination = ({ table, totalRows }: PaginationProps) => {
  const { pageIndex, pageSize } = table.getState().pagination;

  const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <div className={styles.Wrapper}>
      <Info start={start} end={end} totalRows={totalRows} />.
      <Buttons table={table} totalRows={totalRows} />
    </div>
  );
};

