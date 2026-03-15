import { useState } from 'react';

import type { Column } from '@tanstack/table-core';

import classNames from 'classnames';

import type { Product } from 'api/@types';

import { Checkbox } from 'components';

import { getSortingIcon } from './utils';

import * as styles from './Header.scss';

export type HeaderProps = {
  column: Column<Product, unknown>;
  label: string;
  withCheckbox?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export const Header = ({
  column,
  label,
  withCheckbox = false,
  style = {},
  className = '',
}: HeaderProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const sort = column.getIsSorted();
  const sortIcon = getSortingIcon(sort);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    setIsChecked(!isChecked);
  };

  const WrapperClassNames = classNames({
    [styles.Wrapper]: true,
    [className]: !!className,
  });

  return (
    <div style={style} className={WrapperClassNames} onClick={column.getToggleSortingHandler()}>
      {withCheckbox && (
        <Checkbox className={styles.Checkbox} isChecked={isChecked} onClick={clickHandler} />
      )}

      <div className={styles.Label}>
        {label} {sortIcon}
      </div>
    </div>
  );
};
