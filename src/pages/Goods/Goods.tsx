import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { goodsActions } from 'store/goods';

export const Goods = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(goodsActions.productsFetch());
  }, []);

  return (
    <div>
      Здесь будут товары
    </div>
  );
};
