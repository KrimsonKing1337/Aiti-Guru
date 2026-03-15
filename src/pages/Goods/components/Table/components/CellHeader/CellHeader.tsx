import { useState } from 'react';

import type { Column } from '@tanstack/table-core';

import classNames from 'classnames';

import type { Product } from 'api/@types';

import { Checkbox } from 'components';

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
  const [isChecked, setIsChecked] = useState(false);

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

      <div className={styles.Label}>
        {label} {sortIcon}
      </div>
    </div>
  );
};
