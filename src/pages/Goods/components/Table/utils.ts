import type { SortingState } from '@tanstack/react-table';

import type { FetchProductsParams, ProductSortField } from 'api/@types';

export const paginationDefaultValue = {
  pageIndex: 0,
  pageSize: 10,
};

type Params = {
  pageIndex: number;
  pageSize: number;
  sorting: SortingState;
  search: string;
};

export const mapProductsTableStateToFetchParams = ({
  pageIndex,
  pageSize,
  sorting,
  search,
}: Params): FetchProductsParams => {
  const sort = sorting[0];
  const sortBy = sort?.id as ProductSortField | undefined;
  const order = sortBy ? (sort?.desc ? 'desc' : 'asc') : undefined;

  const params: FetchProductsParams = {
    limit: pageSize,
    skip: pageIndex * pageSize,
  };

  if (sortBy) {
    params.sortBy = sortBy;
    params.order = order;
  }

  if (search) {
    params.search = search;
  }

  return params;
};
