import {searchActionTypes} from "./actions";

export const initialState = {
  orderOrFio: '',
  isDisplayFilter: false,
  filters: {
    dateStart: '',
    dateEnd: '',
    statuses: [],
    ofSum: '',
    toSum: '',
  }
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchActionTypes.SET_NUMBER_OR_FIO:
      return {
        ...state,
        orderOrFio: action.payload,
      }
    case searchActionTypes.SET_FILERS:
      const filters = action.payload;
      return {
        ...state,
        filters,
      };
    case searchActionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...initialState.filters
        }
      };
    default:
      return state;
  }
}
