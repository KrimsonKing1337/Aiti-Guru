import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import type { Column } from '@tanstack/table-core';

import classNames from 'classnames';

import type { Product } from 'api/@types';

import { goodsSelectors } from 'store/goods';

import { Checkbox, H6 } from 'components';

import { getSortingIcon } from './utils';

import * as styles from './CellHeader.scss';

export type CellHeaderProps = {
  column: Column<Product, unknown>;
  label: string;
  withCheckbox?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export const CellHeader = ({
  column,
  label,
  withCheckbox = false,
  style = {},
  className = '',
}: CellHeaderProps) => {
  const isResetting = useSelector(goodsSelectors.isResetting);

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (isResetting) {
      setIsChecked(false);
      column.clearSorting();
    }
  }, [isResetting]);

  const sort = column.getIsSorted();
  const sortIcon = getSortingIcon(sort);

  // enableSortingRemoval: true не срабатывает
  const wrapperClickHandler = () => {
    if (sort === 'asc') {
      column.clearSorting();

      return;
    }

    column.getToggleSortingHandler();
  };

  const checkBoxClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    setIsChecked(!isChecked);
  };

  const WrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div style={style} className={WrapperClassNames} onClick={wrapperClickHandler}>
      {withCheckbox && (
        <Checkbox className={styles.Checkbox} isChecked={isChecked} onClick={checkBoxClickHandler} />
      )}

      <H6 className={styles.Label}>
        {label} {sortIcon}
      </H6>
    </div>
  );
};
