import type { Table } from '@tanstack/table-core';

import type { Product } from 'api/@types';

export type PaginationProps = {
  table: Table<Product>;
  page: number;
};

export const Pagination = ({ table, page }: PaginationProps) => {
  const prevButtonClickHandler = () => {
    table.previousPage();
  };

  const nextButtonClickHandler = () => {
    table.nextPage();
  };

  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();

  return (
    <div style={{ marginTop: 20 }}>
      <button disabled={!canPreviousPage} onClick={prevButtonClickHandler}>
        Prev
      </button>

      <span style={{ margin: '0 10px' }}>
          Page {page}
      </span>

      <button disabled={!canNextPage} onClick={nextButtonClickHandler}>
        Next
      </button>
    </div>
  );
};
