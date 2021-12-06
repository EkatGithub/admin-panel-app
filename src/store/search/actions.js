export const searchActionTypes = {
  SET_NUMBER_OR_FIO: 'SEARCH.SET_NUMBER_OR_FIO',
  SET_FILERS: 'SEARCH.SET_FILERS',
  SET_STATUS: 'SEARCH.SET_STATUS',
  CLEAR_FILTERS: 'SEARCH.CLEAR_FILTERS',
};

export const searchActions = {
  setNumberOrFio: (payload) => ({
    type: searchActionTypes.SET_NUMBER_OR_FIO,
    payload,
  }),
  setFilters: (payload) => ({
    type: searchActionTypes.SET_FILERS,
    payload,
  }),
  clearFilters: (payload) => ({
    type: searchActionTypes.CLEAR_FILTERS,
    payload,
  }),
}