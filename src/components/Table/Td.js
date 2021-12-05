import cn from "classnames";
import styles from './Table.module.css';

const Td = ({className, children}) => {
  return (
    <td className={cn(styles.table__item, className)}>
      {children}
    </td>);
}
export default Td;
