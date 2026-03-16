import type { Table } from '@tanstack/react-table';

import classNames from 'classnames';

import CaretLeftIcon from 'assets/icons/caret-left.svg';

import type { Product } from 'api/@types';

import { Button } from 'components';

import { getPaginationItems } from './utils';

export type ButtonsProps = {
  table: Table<Product>;
  totalRows: number;
}

import * as styles from './Buttons.scss';

export const Buttons = ({ table, totalRows }: ButtonsProps) => {
  const { pageIndex, pageSize } = table.getState().pagination;

  const totalPages = Math.ceil(totalRows / pageSize);

  let paginationItems: (string | number)[] = [];

  if (totalPages > 0) {
    paginationItems = getPaginationItems(pageIndex, totalPages);
  }

  const leftButtonClassNames = classNames([
    styles.Button,
    styles.isLeft,
  ]);

  const rightButtonClassNames = classNames([
    styles.Button,
    styles.isRight,
  ]);

  return (
    <div className={styles.Wrapper}>
      <Button
        className={leftButtonClassNames}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        ariaLabel="Предыдущая страница"
      >
        <CaretLeftIcon />
      </Button>

      <div className={styles.ButtonsGoTo}>
        {paginationItems.map((itemCur, index) => {
          if (itemCur === '...') {
            return (
              <span key={`dots-${index}`}>
                ...
              </span>
            );
          }

          const itemClassNames = classNames({
            [styles.ButtonToGo]: true,
            [styles.isActive]: itemCur === pageIndex,
          });

          const value = itemCur as number + 1;
          const ariaLabel = `Перейти на страницу ${value}`;

          return (
            <Button
              key={itemCur}
              className={itemClassNames}
              ariaLabel={ariaLabel}
              onClick={() => table.setPageIndex(itemCur as number)}
            >
              {value}
            </Button>
          );
        },
        )}
      </div>

      <Button
        className={rightButtonClassNames}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        ariaLabel="Следующая страница"
      >
        <CaretLeftIcon />
      </Button>
    </div>
  );
};
