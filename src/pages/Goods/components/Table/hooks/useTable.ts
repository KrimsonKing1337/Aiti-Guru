import { useSelector } from 'react-redux';

import { getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { goodsSelectors } from 'store/goods';

import { columns } from '../columns';

import { useProductsTableState } from './useTableState';
import { useProductsTableData } from './useTableData';

export const useTable = () => {
  const search = useSelector(goodsSelectors.search);

  const {
    sorting,
    setSorting,
    pagination,
    setPagination,
  } = useProductsTableState({ search });

  const {
    productsData,
    total,
  } = useProductsTableData({
    sorting,
    pagination,
  });

  const pageCount = Math.ceil(total / pagination.pageSize);

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

  return {
    table,
    total,
  };
};
