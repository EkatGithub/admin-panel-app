import {paginationActionTypes} from "./action";

const initialState = 1;

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case paginationActionTypes.SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}
