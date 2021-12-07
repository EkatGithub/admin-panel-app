import {fieldFormatDate, fieldFormatNumber} from "../../helpers";

export const searchOrders = (state) => ({
  ...state,
  orders: state.orders.filter(({id, name, status, sum, creationDate}) => {
    const {orderOrFio = '', filters} = state.search;
    const {statuses, ofSum, toSum, dateStart, dateEnd} = filters;

    const isOrderOrFio = !orderOrFio ? true :
      ((''+id).includes(orderOrFio) || name.toLowerCase().includes(orderOrFio.toLowerCase()));

    const isDateStart = !fieldFormatDate(dateStart) ? true : fieldFormatDate(dateStart) <= fieldFormatDate(creationDate);
    const isDateEnd = !fieldFormatDate(dateEnd) ? true : fieldFormatDate(dateEnd) >= fieldFormatDate(creationDate);

    const isStatuses = !statuses.length ? true : statuses.includes(status);

    const isOfSum = !fieldFormatNumber(ofSum) ? true : +ofSum <= sum;
    const isToSum = !fieldFormatNumber(toSum) ? true : +toSum >= sum;

    return isOrderOrFio && isStatuses && isDateStart && isDateEnd && isOfSum && isToSum;
  })
});

export const getFieldOrderOrFio = (state) => state.search.orderOrFio || '';
