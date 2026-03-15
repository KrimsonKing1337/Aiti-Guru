import { useDispatch } from 'react-redux';

import PlusIcon from 'assets/icons/plus-circle.svg';
import ArrowsIcon from 'assets/icons/arrows-clockwise.svg';

import { goodsActions } from 'store/goods';

import { productFetchDefaultParams } from 'store/goods/utils';

import * as styles from './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const refreshButtonClickHandler = () => {
    dispatch(goodsActions.productsFetch(productFetchDefaultParams));
    localStorage.removeItem('sorting');
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Label}>
        Все позиции
      </div>

      <div className={styles.Buttons}>
        <div className={styles.RefreshButton} onClick={refreshButtonClickHandler}>
          <ArrowsIcon />
        </div>

        <div className={styles.AddButton}>
          <PlusIcon />

          <span>
            Добавить
          </span>
        </div>
      </div>
    </div>
  );
};
