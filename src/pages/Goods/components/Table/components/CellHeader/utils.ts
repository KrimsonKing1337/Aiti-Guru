import type { SortDirection } from '@tanstack/react-table';

export const getSortingIcon = (sortState: SortDirection | false) => {
  let icon = null;

  if (sortState === 'asc') {
    icon = '↑';
  }

  if (sortState === 'desc') {
    icon = '↓';
  }

  return icon;
};
