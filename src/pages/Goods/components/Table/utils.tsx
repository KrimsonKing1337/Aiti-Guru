import { useState } from 'react';

import type { ColumnDef } from '@tanstack/react-table';

import classNames from 'classnames';

import type { Product } from 'api/@types';

import { Checkbox } from 'components';

import { Header, Cell } from './components';
import { Desc, Title as DefaultCellTitle } from './components/Cell/components';

import * as styles from './Table.scss';

export const formatPrice = (value: number) => {
  const [integer, decimal] = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(value)
    .replace(/\u00A0/g, ' ')
    .split(',');

  return {
    integer,
    decimal,
  };
};

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
    cell: ({ row }) => {
      const product = row.original;
      const { thumbnail, title, description } = product;

      const [isChecked, setIsChecked] = useState(false);

      const cellHighlightClassName = classNames({
        [styles.CellHighlight]: true,
        [styles.isActive]: isChecked,
      });

      const clickHandler = () => {
        setIsChecked(!isChecked);
      };

      const Left = (
        <>
          <div className={cellHighlightClassName} />
          <Checkbox isChecked={isChecked} onClick={clickHandler} />
          <img src={thumbnail} alt={title} className={styles.Thumbnail} />
        </>
      );

      const Title = (
        <>
          <DefaultCellTitle style={{ textAlign: 'left' }}>
            {title}
          </DefaultCellTitle>

          <Desc>
            {description}
          </Desc>
        </>
      );

      return (
        <Cell Left={Left} Title={Title} />
      );
    },
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
    cell: ({ row }) => {
      const product = row.original;
      const { rating } = product;

      const textColor = rating < 3 ? '#F11010' : '';

      const Title = (
        <DefaultCellTitle style={{ color: textColor }} isThin={true}>
          {rating}
        </DefaultCellTitle>
      );

      return (
        <Cell Title={Title} />
      );
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <Header column={column} label="Цена" />
    ),
    cell: ({ row }) => {
      const product = row.original;
      const { price } = product;

      const formattedPrice = formatPrice(price);
      const { integer, decimal } = formattedPrice;

      const Title = (
        <DefaultCellTitle isThin={true}>
          <>
            <span>
              {integer}
            </span>

            <span style={{ color: '#999' }}>
              ,{decimal}
            </span>
          </>
        </DefaultCellTitle>
      );

      return (
        <Cell Title={Title} extraWrapperClassName={styles.PriceWrapper} />
      );
    },
  },
];
