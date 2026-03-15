export const getPaginationItems = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_value, i) => i,
    );
  }

  let start = currentPage;
  let end = currentPage + 4;

  if (end > totalPages - 1) {
    end = totalPages - 1;
    start = end - 4;
  }

  if (start < 0) {
    start = 0;
    end = 4;
  }

  const middlePages: number[] = [];

  for (let i = start; i <= end; i++) {
    middlePages.push(i);
  }

  const result: (number | string)[] = [];

  result.push(0);

  if (start > 1) {
    result.push('...');
  }

  for (const pageCur of middlePages) {
    if (pageCur !== 0 && pageCur !== totalPages - 1) {
      result.push(pageCur);
    }
  }

  if (end < totalPages - 2) {
    result.push('...');
  }

  result.push(totalPages - 1);

  return result;
};
