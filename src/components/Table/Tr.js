import cn from "classnames";
import styles from './Table.module.css';

export const Tr = ({className, type = 'body', children, ...props}) => {
  return (
    <tr className={cn({
      [styles.table__tr]: type === 'body',
      [styles.table__header]: type === 'head',
    } ,className)} {...props}>
      {children}
    </tr>
  )
}
