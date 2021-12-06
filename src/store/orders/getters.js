export const getOrderList = (state) => state.orders.filter((item, i) => i < 10);
export const getSelectedOrders = (state) => state.orders.filter((item) => !!item.select);