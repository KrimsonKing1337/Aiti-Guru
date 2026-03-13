import { useEffect, useState } from 'react';

import {
  type SortingState,
  type PaginationState,

  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

import { useDispatch, useSelector } from 'react-redux';

import type { FetchProductParams, Product } from 'api/@types';

import { goodsActions, goodsSelectors } from 'store/goods';

import { Head } from './components';
import { columns } from './utils';

export function Table() {
  const dispatch = useDispatch();

  const isFetching = useSelector(goodsSelectors.isFetching);
  const products = useSelector(goodsSelectors.products);

  const [data, setData] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [sorting, setSorting] = useState<SortingState>([]);

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => {
    const sort = sorting[0];

    const limit = pagination.pageSize;
    const skip = pagination.pageIndex * pagination.pageSize;
    const sortBy = sort?.id ?? '';
    const order = sort?.desc ? 'desc' : 'asc';

    const params: FetchProductParams = {
      limit,
      skip,
      sortBy,
      order,
    };

    dispatch(goodsActions.productsFetch(params));
  }, [sorting, pagination]);

  useEffect(() => {
    if (!products) {
      return;
    }

    setData(products.products);
    setTotal(products.total);
  }, [products]);

  const pageCount = Math.ceil(total / pagination.pageSize);

  const table = useReactTable({
    data,
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

  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();

  const page = pagination.pageIndex + 1;

  const prevButtonClickHandler = () => {
    table.previousPage();
  };

  const nextButtonClickHandler = () => {
    table.nextPage();
  };

  return (
    <div>
      {isFetching && <div>Loading...</div>}

      <table>
        <Head table={table} />

        <tbody>
          {table.getRowModel().rows.map(rowCur => {
            const { getVisibleCells } = rowCur;

            return (
              <tr key={rowCur.id}>
                {getVisibleCells().map(cellCur => {
                  const { column, getContext } = cellCur;

                  const flexRenderResult = flexRender(
                    column.columnDef.cell,
                    getContext(),
                  );

                  return (
                    <td key={cellCur.id}>
                      {flexRenderResult}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ marginTop: 20 }}>
        <button disabled={!canPreviousPage} onClick={prevButtonClickHandler}>
          Prev
        </button>

        <span style={{ margin: '0 10px' }}>
          Page {page}
        </span>

        <button disabled={!canNextPage} onClick={nextButtonClickHandler}>
          Next
        </button>
      </div>
    </div>
  );
}
