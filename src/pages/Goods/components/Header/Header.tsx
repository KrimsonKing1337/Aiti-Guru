import { useDispatch, useSelector } from 'react-redux';

import { goodsActions, goodsSelectors } from 'store/goods';

import * as styles from './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const search = useSelector(goodsSelectors.search);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(goodsActions.setSearch(e.target.value));
  };

  return (
    <div className={styles.Wrapper}>
      <div>
        Товары
      </div>

      <input placeholder="Найти" value={search} onChange={inputChangeHandler} />
    </div>
  );
};
