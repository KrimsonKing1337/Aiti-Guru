import type { ColumnDef } from '@tanstack/react-table';

import type { Product } from 'api/@types';

import { Header, Cell } from './components';
import { Title as TitleCell, Rating as RatingCell, Price } from './components/Cells';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <Header
        column={column}
        label="Название"
        withCheckbox={true}
        style={{ justifyContent: 'flex-start' }}
      />
    ),
    cell: ({ row }) => (
      <TitleCell row={row} />
    ),
  },
  {
    accessorKey: 'brand',
    header: ({ column }) => (
      <Header column={column} label="Вендор" />
    ),
    cell: ({ row }) => {
      const product = row.original;
      const { brand } = product;

      return (
        <Cell Title={brand} />
      );
    },
  },
  {
    accessorKey: 'sku',
    header: ({ column }) => (
      <Header column={column} label="Артикул" />
    ),
    cell: ({ row }) => {
      const product = row.original;
      const { sku } = product;

      return (
        <Cell Title={sku} />
      );
    },
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => (
      <Header column={column} label="Оценка" />
    ),
    cell: ({ row }) => (
      <RatingCell row={row} />
    ),
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <Header column={column} label="Цена" />
    ),
    cell: ({ row }) => (
      <Price row={row} />
    ),
  },
];
