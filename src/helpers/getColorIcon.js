export const getColorIcon = (status) => {
    switch (status) {
      case 'Отменен':
        return 'cancel';
      case 'Новый':
      case 'Отложен':
        return '#FF8C56';
      case 'Расчет':
        return '#459DF5';
      case 'Выполнен':
        return '#0FB864';
      default:
        return "";
    }
  };