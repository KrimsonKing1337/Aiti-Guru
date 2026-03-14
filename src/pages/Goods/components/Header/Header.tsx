import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from 'assets/icons/search.svg';

import { goodsActions, goodsSelectors } from 'store/goods';

import { useDebounce } from 'hooks';

import { Input } from 'components';

import * as styles from './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const search = useSelector(goodsSelectors.search);

  const [value, setValue] = useState(search);

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedValue.length === 1) {
      return;
    }

    dispatch(goodsActions.setSearch(debouncedValue));
  }, [debouncedValue]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Title}>
        Товары
      </div>

      <Input
        wrapperClassName={styles.InputMainWrapper}
        className={styles.Input}
        name="search"
        label=""
        placeholder="Найти"
        value={value}
        setValue={setValue}
        Icon={SearchIcon}
      />
    </div>
  );
};
