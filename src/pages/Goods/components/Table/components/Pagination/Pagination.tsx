import type { Table } from '@tanstack/table-core';

import CaretLeftIcon from 'assets/icons/caret-left.svg';

import type { Product } from 'api/@types';

import { getPaginationItems } from './utils';

type PaginationProps = {
  table: Table<Product>;
  totalRows: number;
}

import * as styles from './Pagination.scss';

export const Pagination = ({ table, totalRows }: PaginationProps) => {
  const { pageIndex, pageSize } = table.getState().pagination;

  const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, totalRows);
  const totalPages = Math.ceil(totalRows / pageSize);

  let paginationItems: (string | number)[] = [];

  if (totalPages > 0) {
    paginationItems = getPaginationItems(pageIndex, totalPages);
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Info}>
        <span>
          Показано
        </span>

        <span className={styles.InfoDarkItem}>
          {start}-{end}
        </span>

        <span>из</span>

        <span className={styles.InfoDarkItem}>
          {totalRows}
        </span>
      </div>

      <div className={styles.Buttons}>
        <button
          type="button"
          className={`${styles.Button} ${styles.isLeft}`}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <CaretLeftIcon />
        </button>

        <div className={styles.ButtonsGoTo}>
          {paginationItems.map((item, index) =>
            item === '...' ? (
              <span key={`dots-${index}`} className="pagination-dots">
              ...
              </span>
            ) : (
              <button
                key={item}
                type="button"
                className={item === pageIndex ? `${styles.ButtonToGo} ${styles.isActive}` : styles.ButtonToGo}
                onClick={() => table.setPageIndex(item as number)}
              >
                {(item as number) + 1}
              </button>
            ),
          )}
        </div>

        <button
          type="button"
          className={`${styles.Button} ${styles.isRight}`}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <CaretLeftIcon />
        </button>
      </div>
    </div>
  );
};
