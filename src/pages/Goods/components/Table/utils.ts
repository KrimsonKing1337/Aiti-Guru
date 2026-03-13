import type { ColumnDef, SortDirection } from '@tanstack/react-table';

import type { Product } from 'api/@types';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'title',
    header: 'Название',
  },
  {
    accessorKey: 'brand',
    header: 'Вендор',
  },
  {
    accessorKey: 'sku',
    header: 'Артикул',
  },
  {
    accessorKey: 'rating',
    header: 'Оценка',
  },
  {
    accessorKey: 'price',
    header: 'Цена',
  },
];

export const getSortingIcon = (sortState: SortDirection | false) => {
  let icon = null;

  if (sortState === 'asc') {
    icon = ' ^';
  }

  if (sortState === 'desc') {
    icon = ' v';
  }

  return icon;
};
