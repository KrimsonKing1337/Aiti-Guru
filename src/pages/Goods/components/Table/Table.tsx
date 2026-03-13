import { useEffect, useState } from 'react';

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

  useEffect(() => {
    const sort = sorting[0];

    const limit = pagination.pageSize;
    const skip = pagination.pageIndex * pagination.pageSize;
    const sortBy = sort?.id ?? '';
    const order = sort?.desc ? 'desc' : 'asc';

    const params: FetchProductsParams = {
      limit,
      skip,
      sortBy,
      order,
    };

    if (search) {
      params.search = search;
    }

    dispatch(goodsActions.productsFetch(params));
  }, [sorting, pagination, search]);

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

  const page = pagination.pageIndex + 1;

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
