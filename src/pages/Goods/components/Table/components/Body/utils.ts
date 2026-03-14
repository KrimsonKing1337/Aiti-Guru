export const getTdClassName = (id: string) => {
  if (id === 'title' || id === 'brand') {
    return 'LabelBold';
  }

  return 'Label';
};
