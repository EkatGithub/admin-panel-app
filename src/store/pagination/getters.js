export const getOrdersPageNumber = ({orders, pagination}) => {
  const maxPage = Math.ceil(orders.length / 10);
  const currentPage = pagination <= maxPage ? pagination : 1;
  const startIndex = currentPage * 10 - 10;
  const endIndex = startIndex + 10;
  return orders.filter((order, i) => i >= startIndex && i<endIndex);
};
