import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { goodsActions, goodsSelectors } from 'store/goods';

import { useDebounce } from 'hooks';

import * as styles from './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const search = useSelector(goodsSelectors.search);

  const [value, setValue] = useState(search);

  const debouncedValue = useDebounce(value, 500);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue.length === 1) {
      return;
    }

    dispatch(goodsActions.setSearch(debouncedValue));
  }, [debouncedValue, dispatch]);

  return (
    <div className={styles.Wrapper}>
      <div>Товары</div>

      <input
        placeholder="Найти"
        value={value}
        onChange={inputChangeHandler}
      />
    </div>
  );
};
