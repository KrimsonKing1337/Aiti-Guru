import { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import type { PaginationState, SortingState } from '@tanstack/react-table';

import { goodsActions, goodsSelectors } from 'store/goods';

import { mapProductsTableStateToFetchParams } from '../utils';

type Params = {
  sorting: SortingState;
  pagination: PaginationState;
};

export const useProductsTableData = ({ sorting, pagination }: Params) => {
  const dispatch = useDispatch();

  const products = useSelector(goodsSelectors.products);
  const search = useSelector(goodsSelectors.search);

  const { pageIndex, pageSize } = pagination;

  const fetchParams = useMemo(() => {
    return mapProductsTableStateToFetchParams({
      pageIndex,
      pageSize,
      sorting,
      search,
    });
  }, [pageIndex, pageSize, sorting, search]);

  useEffect(() => {
    dispatch(goodsActions.productsFetch(fetchParams));
  }, [dispatch, fetchParams]);

  const total = products?.total ?? 0;
  const productsData = products?.products ?? [];

  return {
    search,
    products,
    productsData,
    total,
  };
};
