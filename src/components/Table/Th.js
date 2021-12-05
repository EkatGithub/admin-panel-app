import styles from './Table.module.css';
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import cn from "classnames";

const Th = ({children, onCLick, select, ...props}) => {

  return (
    <th className={styles.table__item} onClick={onCLick} {...props}>
      <div className={cn(styles.table__th, {
        [styles.table__item_pointer]: onCLick
      })}>
        {children}
        {onCLick && <ArrowIcon className={styles.table__icon} select={select} color="#fff" />}
      </div>
    </th>
  );
};

export default Th;
