import { useState } from 'react';

import type { Row } from '@tanstack/table-core';

import classNames from 'classnames';

import type { Product } from 'api/@types';

import { Checkbox } from 'components';

import { Cell } from '../../Cell';
import { Desc, Title as DefaultCellTitle } from '../../Cell/components';

import * as styles from './Title.scss';

export type TitleProps = {
  row: Row<Product>
};

export const Title = ({ row }: TitleProps) => {
  const product = row.original;
  const { thumbnail, title, description } = product;

  const [isChecked, setIsChecked] = useState(false);

  const highlightClassName = classNames({
    [styles.Highlight]: true,
    [styles.isActive]: isChecked,
  });

  const clickHandler = () => {
    setIsChecked(!isChecked);
  };

  const Left = (
    <>
      <div className={highlightClassName} />
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
};
