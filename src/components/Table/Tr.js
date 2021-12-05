import cn from "classnames";
import styles from './Table.module.css';

const Tr = ({className, children}) => {
  return (
    <tr className={cn(styles.table__tr ,className)}>
      {children}
    </tr>
  )
}
export default Tr;
