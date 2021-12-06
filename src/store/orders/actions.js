export const ordersActionTypes = {
    SET: 'ORDERS.SET',
    SORT: 'ORDERS.SORT',
    SELECT: 'ORDERS.SELECT',
    SELECT_GROUP: 'ORDERS.SELECT_GROUP',
    ORDERS_DELETE: 'ORDERS.ORDERS_DELETE',
    ORDER_SAVE: 'ORDERS.ORDER_SAVE',
    CHANGE_STATUS: 'ORDERS.CHANGE_STATUS',
  };
  
  export const ordersActions = {
    set: (payload) => ({
      type: ordersActionTypes.SET,
      payload,
    }),
    sort: (payload) => ({
      type: ordersActionTypes.SORT,
      payload,
    }),
    select: (payload) => ({
      type: ordersActionTypes.SELECT,
      payload,
    }),
    selectGroup: (payload) => ({
      type: ordersActionTypes.SELECT_GROUP,
      payload,
    }),
    ordersDelete: (payload) => ({
      type: ordersActionTypes.ORDERS_DELETE,
      payload,
    }),
    ordersSave: (payload) => ({
      type: ordersActionTypes.ORDER_SAVE,
      payload,
    }),
    changeStatus: (payload) => ({
      type: ordersActionTypes.CHANGE_STATUS,
      payload,
    }),
  };