export const paginationActionTypes = {
  SET_PAGE: '`PAGINATION`.SET_PAGE',
};

export const paginationActions = {
  setPage: (payload) => ({
    type: paginationActionTypes.SET_PAGE,
    payload,
  }),
}
