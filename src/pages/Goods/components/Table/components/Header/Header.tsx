import { useDispatch } from 'react-redux';

import PlusIcon from 'assets/icons/plus-circle.svg';
import ArrowsIcon from 'assets/icons/arrows-clockwise.svg';

import { goodsActions } from 'store/goods';

import { productFetchDefaultParams } from 'store/goods/utils';

import { Loader, Button, DefaultButton, H2 } from 'components';

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
      <H2 className={styles.Label}>
        Все позиции
      </H2>

      {isFetching && (
        <Loader className={styles.Loader} />
      )}

      <div className={styles.Buttons}>
        <Button
          className={styles.RefreshButton}
          ariaLabel="Загрузить товары заново"
          onClick={refreshButtonClickHandler}
        >
          <ArrowsIcon />
        </Button>

        <DefaultButton
          className={styles.AddButton}
          ariaLabel="Добавить товар"
          onClick={addButtonClickHandler}
        >
          <PlusIcon />

          <span>
            Добавить
          </span>
        </DefaultButton>
      </div>
    </div>
  );
};
