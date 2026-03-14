import { useState } from 'react';

import type { ColumnDef, SortDirection } from '@tanstack/react-table';

import classNames from 'classnames';

import type { Product } from 'api/@types';

import { Checkbox } from 'components/Checkbox';

import * as styles from './Table.scss';

export const getSortingIcon = (sortState: SortDirection | false) => {
  let icon = null;

  if (sortState === 'asc') {
    icon = '↑';
  }

  if (sortState === 'desc') {
    icon = '↓';
  }

  return icon;
};

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
    header: ({ column }) => {
      const [isChecked, setIsChecked] = useState(false);

      const sort = column.getIsSorted();
      const sortIcon = getSortingIcon(sort);

      const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        setIsChecked(!isChecked);
      };

      return (
        <div className={styles.HeaderWrapper} onClick={column.getToggleSortingHandler()}>
          <Checkbox isChecked={isChecked} onClick={clickHandler} />

          <div className={styles.HeaderLabel}>
            Название {sortIcon}
          </div>
        </div>
      );
    },
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

      return (
        <div className={styles.Cell}>
          <div className={cellHighlightClassName} />
          <Checkbox isChecked={isChecked} onClick={clickHandler} />
          <img src={thumbnail} alt={title} className={styles.Thumbnail} />

          <div style={{ width: '278px' }}>
            <div style={{ textAlign: 'left' }} className={styles.CellTitle}>
              {title}
            </div>

            <div className={styles.CellDesc}>
              {description}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'brand',
    header: 'Вендор',
    cell: ({ row }) => {
      const product = row.original;
      const { brand } = product;

      return (
        <div className={styles.Cell}>
          <div style={{ width: '278px' }}>
            <div className={styles.CellTitle}>
              {brand}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'sku',
    header: 'Артикул',
    cell: ({ row }) => {
      const product = row.original;
      const { sku } = product;

      return (
        <div className={styles.Cell}>
          <div style={{ width: '278px' }}>
            <div className={styles.CellTitleThin}>
              {sku}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'rating',
    header: 'Оценка',
    cell: ({ row }) => {
      const product = row.original;
      const { rating } = product;

      const textColor = rating < 3 ? '#F11010' : '';

      return (
        <div className={styles.Cell}>
          <div style={{ width: '278px' }}>
            <div style={{ color: textColor }} className={styles.CellTitleThin}>
              {rating}
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'price',
    header: 'Цена',
    cell: ({ row }) => {
      const product = row.original;
      const { price } = product;

      const formattedPrice = formatPrice(price);
      const { integer, decimal } = formattedPrice;

      return (
        <div className={styles.Cell}>
          <div style={{ width: '278px' }} className={styles.PriceWrapper}>
            <div className={styles.CellTitleThin}>
              {integer}
            </div>

            <div style={{ color: '#999' }} className={styles.CellTitleThin}>
              ,{decimal}
            </div>
          </div>
        </div>
      );
    },
  },
];
