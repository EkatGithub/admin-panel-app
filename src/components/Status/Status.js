import styles from './Status.module.css';
import {Icon} from "../Icon/Icon";
import {getColorIcon, getTypeIcon} from "../../helpers";
import cn from "classnames";

const Status = ({name, value}) => {
  return (
    <div className={styles.status}>
      <Icon type={getTypeIcon(value)} color={getColorIcon(value)} />
      <p className={cn(styles.status__name, {
        [styles.status__name_done]: value === 'Выполнен',
        [styles.status__name_disabled]: value === 'Выполнен' || value === 'Отменен' ,
      })}>{name}</p>
    </div>
  );
};
export default Status;
