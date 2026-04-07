import { useEffect, useState } from 'react';

import type { PaginationState, SortingState } from '@tanstack/react-table';

import { getRememberMe } from 'utils';

import { paginationDefaultValue } from '../utils';

type Params = {
  search: string;
};

export const useProductsTableState = ({ search }: Params) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>(paginationDefaultValue);

  useEffect(() => {
    const sortingLocalStorage = localStorage.getItem('sorting');

    if (!sortingLocalStorage) {
      return;
    }

    setSorting(JSON.parse(sortingLocalStorage));
  }, []);

  useEffect(() => {
    const rememberMe = getRememberMe();

    if (rememberMe) {
      localStorage.setItem('sorting', JSON.stringify(sorting));
    } else {
      localStorage.removeItem('sorting');
    }

    setPagination(paginationDefaultValue);
  }, [sorting]);

  useEffect(() => {
    setPagination((prev) => ({
      ...prev,
      pageIndex: 0,
    }));
  }, [search]);

  return {
    sorting,
    setSorting,
    pagination,
    setPagination,
  };
};
