import type { Table } from '@tanstack/table-core';
import { flexRender } from '@tanstack/react-table';

import type { Product } from 'api/@types';

import { getSortingIcon } from './utils';

import * as styles from './Head.scss';

export type HeadProps = {
  table: Table<Product>;
};

export const Head = ({ table }: HeadProps) => {
  return (
    <thead>
      {table.getHeaderGroups().map(groupCur => {
        const { headers } = groupCur;

        return (
          <tr key={groupCur.id}>
            {headers.map(headerCur => {
              const { column, getContext } = headerCur;
              const { header } = column.columnDef;

              const context = getContext();
              const flexRenderResult = flexRender(header, context);

              const sortState = column.getIsSorted();
              const icon = getSortingIcon(sortState);

              const clickHandler = column.getToggleSortingHandler();

              return (
                <th
                  key={headerCur.id}
                  className={styles.Th}
                  onClick={clickHandler}
                >
                  {flexRenderResult}
                  {icon}
                </th>
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
};
