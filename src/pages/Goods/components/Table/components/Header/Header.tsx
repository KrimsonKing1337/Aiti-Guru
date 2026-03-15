import { useDispatch } from 'react-redux';

import PlusIcon from 'assets/icons/plus-circle.svg';
import ArrowsIcon from 'assets/icons/arrows-clockwise.svg';

import { goodsActions } from 'store/goods';

import { productFetchDefaultParams } from 'store/goods/utils';

import { Loader } from 'components';

import * as styles from './Header.scss';

export type HeaderProps = {
  isFetching: boolean;
};

export const Header = ({ isFetching }: HeaderProps) => {
  const dispatch = useDispatch();

  const refreshButtonClickHandler = () => {
    dispatch(goodsActions.productsFetch(productFetchDefaultParams));

    localStorage.removeItem('sorting');
  };

  const addButtonClickHandler = () => {
    dispatch(goodsActions.setIsModalActive(true));
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Label}>
        Все позиции
      </div>

      {isFetching && (
        <Loader className={styles.Loader} />
      )}

      <div className={styles.Buttons}>
        <div className={styles.RefreshButton} onClick={refreshButtonClickHandler}>
          <ArrowsIcon />
        </div>

        <div className={styles.AddButton} onClick={addButtonClickHandler}>
          <PlusIcon />

          <span>
            Добавить
          </span>
        </div>
      </div>
    </div>
  );
};
