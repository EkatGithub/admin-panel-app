export const fieldFormatNumber = (field) => {
  return field && typeof +field === 'number' ? +field : '';
}

export const fieldFormatDate = (field) => {
  const date = +new Date(field);
  return field && !Number.isNaN(date) ? date : 0;
}
