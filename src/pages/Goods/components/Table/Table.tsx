import { useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  type SortingState,
  type PaginationState,

  useReactTable,
  getCoreRowModel,
} from '@tanstack/react-table';

import type { FetchProductsParams } from 'api/@types';

import { goodsActions, goodsSelectors } from 'store/goods';

import { Head, Body, Pagination } from './components';

import { columns } from './utils';

export function Table() {
  const dispatch = useDispatch();

  const isFetching = useSelector(goodsSelectors.isFetching);
  const products = useSelector(goodsSelectors.products);
  const search = useSelector(goodsSelectors.search);

  const [sorting, setSorting] = useState<SortingState>([]);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    setPagination((prev) => {
      return {
        ...prev,
        pageIndex: 0,
      };
    });
  }, [search]);

  const sort = sorting[0];
  const sortId = sort?.id;
  const sortDesc = sort?.desc;

  const { pageIndex, pageSize } = pagination;

  const params = useMemo<FetchProductsParams>(() => {
    const limit = pageSize;
    const skip = pageIndex * pageSize;
    const sortBy = sortId ?? '';
    const order = sortDesc ? 'desc' : 'asc';

    const params: FetchProductsParams = {
      limit,
      skip,
      sortBy,
      order,
    };

    if (search) {
      params.search = search;
    }

    return params;
  }, [
    sorting,
    pageIndex,
    pageSize,
    sortId,
    sortDesc,
    search,
  ]);

  useEffect(() => {
    dispatch(goodsActions.productsFetch(params));
  }, [params]);

  const total = products?.total || 0;
  const pageCount = Math.ceil(total / pagination.pageSize);

  const productsData = products?.products || [];

  const table = useReactTable({
    data: productsData,
    columns,

    state: {
      sorting,
      pagination,
    },

    onSortingChange: setSorting,
    onPaginationChange: setPagination,

    getCoreRowModel: getCoreRowModel(),

    manualSorting: true,
    manualPagination: true,

    pageCount,
  });

  const page = pageIndex + 1;

  return (
    <div>
      {isFetching && <div>Loading...</div>}

      <table>
        <Head table={table} />
        <Body table={table} />
      </table>

      <Pagination table={table} page={page} />
    </div>
  );
}
