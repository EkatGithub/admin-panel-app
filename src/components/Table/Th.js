import styles from './Table.module.css';
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import cn from "classnames";

export const Th = ({children, onClick, select, isAscending, ...props}) => {
  return (
    <th className={cn(styles.table__item, {
      [styles.table__thead_select]: select,
    })} onClick={onClick} {...props}>
      <div className={cn(styles.table__th, {
        [styles.table__item_pointer]: onClick,
      })}>
        {children}
        {onClick && <ArrowIcon className={styles.table__icon} select={isAscending} color="#fff" />}
      </div>
    </th>
  );
};
