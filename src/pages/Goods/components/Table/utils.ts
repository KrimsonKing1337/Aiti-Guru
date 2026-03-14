import type { ColumnDef } from '@tanstack/react-table';

import type { Product } from 'api/@types';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'title',
    header: 'Наименование',
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

