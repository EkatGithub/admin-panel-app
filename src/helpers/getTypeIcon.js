export const getTypeIcon = (type) => {
  switch (type) {
    case 'Отменен':
      return 'cancel';
    case 'Отложен':
    case 'Новый':
    case 'Расчет':
      return 'new';
    case 'Выполнен':
     return 'done';
    default:
      return "";
  }
}
