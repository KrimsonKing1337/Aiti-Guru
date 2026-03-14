import type { Row } from '@tanstack/table-core';

import type { Product } from 'api/@types';

import { Cell } from '../../Cell';
import { Title as DefaultCellTitle } from '../../Cell/components';

export type RatingProps = {
  row: Row<Product>
};

export const Rating = ({ row }: RatingProps) => {
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
};
