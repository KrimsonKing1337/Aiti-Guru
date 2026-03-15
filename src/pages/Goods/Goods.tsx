import { useDispatch, useSelector } from 'react-redux';

import { goodsActions, goodsSelectors } from 'store/goods';

import { AddProductModal } from 'components/AddProductModal';

import { Header, Table } from './components';

import * as styles from './Goods.scss';

export const Goods = () => {
  const dispatch = useDispatch();

  const isModalActive = useSelector(goodsSelectors.isModalActive);

  const modalButtonClickHandler = () => {
    dispatch(goodsActions.setIsModalActive(false));
  };

  return (
    <div className={styles.Wrapper}>
      <AddProductModal isActive={isModalActive} onButtonClick={modalButtonClickHandler} />
      <Header />
      <Table />
    </div>
  );
};
