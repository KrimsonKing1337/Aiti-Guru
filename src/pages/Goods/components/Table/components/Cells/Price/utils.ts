export const formatPrice = (value: number) => {
  const [integer, decimal] = new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(value)
    .replace(/\u00A0/g, ' ')
    .split(',');

  return {
    integer,
    decimal,
  };
};
