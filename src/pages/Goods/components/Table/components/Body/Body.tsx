import type { Table } from '@tanstack/table-core';

import { flexRender } from '@tanstack/react-table';

import type { Product } from 'api/@types';

export type BodyProps = {
  table: Table<Product>;
};

import * as styles from './Body.scss';

export const Body = ({ table }: BodyProps) => {
  return (
    <tbody>
      {table.getRowModel().rows.map(rowCur => {
        const { getVisibleCells } = rowCur;

        return (
          <tr key={rowCur.id} className={styles.Tr}>
            {getVisibleCells().map(cellCur => {
              const { column, getContext } = cellCur;
              const { cell } = column.columnDef;

              const context = getContext();
              const flexRenderResult = flexRender(cell, context);

              return (
                <td key={cellCur.id}>
                  {flexRenderResult}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
