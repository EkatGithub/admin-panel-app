import cn from "classnames";
import styles from './Table.module.css';

export const Td = ({className, children, ...props}) => {
  return (
    <td className={cn(styles.table__item, className)} {...props}>
      {children}
    </td>);
}
