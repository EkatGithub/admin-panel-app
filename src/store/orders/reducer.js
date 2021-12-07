import {ordersActionTypes} from "./actions";
import {orders} from "../../constants/orders";
import {sortAscending, sortDescending} from "../../helpers";

const initialState = [...orders];

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ordersActionTypes.SET:
      state = [...action.payload];
      return state;
    case ordersActionTypes.SORT:
      const {nameKey, isAscending} = action.payload;
      if (isAscending) {
        return state.sort(sortAscending(nameKey));
      }
      return state.sort(sortDescending(nameKey));
    case ordersActionTypes.SELECT:
      const {id, status} = action.payload;
      return state.map((order) => {
        if (order.id === id) {
          order.select = status;
        }
        return order;
      });
    case ordersActionTypes.SELECT_GROUP:
      const {ordersIds, status: statusGroup} = action.payload;
      return state.map((order) => {
        if (ordersIds.includes(order.id)) {
          order.select = statusGroup;
        }
        return order;
      });
    case ordersActionTypes.ORDERS_DELETE:
      const ordersDeleteIds = action.payload;
      return state.filter((order) => !ordersDeleteIds.includes(order.id));
    case ordersActionTypes.ORDER_SAVE:
      const orderSave = action.payload;
      return state.map((order) => order.id === orderSave.id ? orderSave : order);
    case ordersActionTypes.CHANGE_STATUS:
      const ordersNew = action.payload;
      console.log(ordersNew)
      return state.map((order) => {
        const orderItem = ordersNew.find(({id}) => order.id === id);
        if (orderItem) {
          return orderItem
        }
        return order;
      });
    default:
      return state;
  }
};
