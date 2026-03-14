import type { Row } from '@tanstack/table-core';

import type { Product } from 'api/@types';

import { Cell } from '../../Cell';
import { Title as DefaultCellTitle } from '../../Cell/components';

import { formatPrice } from './utils';

export type PriceProps = {
  row: Row<Product>
};

import * as styles from './Price.scss';

export const Price = ({ row }: PriceProps) => {
  const product = row.original;
  const { price } = product;

  const formattedPrice = formatPrice(price);
  const { integer, decimal } = formattedPrice;

  const Title = (
    <DefaultCellTitle isThin={true} className={`${styles.Label} ${styles.override}`}>
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
    <Cell Title={Title} extraWrapperClassName={styles.Wrapper} />
  );
};
