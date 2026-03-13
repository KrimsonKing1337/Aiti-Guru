import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { goodsActions, goodsSelectors } from 'store/goods';

import * as styles from './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const search = useSelector(goodsSelectors.search);

  const [value, setValue] = useState(search);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length === 1) {
      return;
    }

    const timer = setTimeout(() => {
      dispatch(goodsActions.setSearch(value));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, dispatch]);

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
