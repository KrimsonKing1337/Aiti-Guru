import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import { goodsActions, goodsSelectors } from 'store/goods';

import { Header, Table, AddProductModal } from './components';

import * as styles from './Goods.scss';

export const Goods = () => {
  const dispatch = useDispatch();

  const isModalActive = useSelector(goodsSelectors.isModalActive);

  const modalButtonClickHandler = () => {
    dispatch(goodsActions.setIsModalActive(false));

    toast.success('Продукт добавлен');
  };

  return (
    <div className={styles.Wrapper}>
      <AddProductModal isActive={isModalActive} onButtonClick={modalButtonClickHandler} />
      <Header />
      <Table />
    </div>
  );
};
