import styles from './Dropdown.module.css';
import cn from "classnames";

const Dropdown = ({className, children}) => {
  return (
    <div className={cn(styles.dropdown, className)}>
      {children}
    </div>
  );
}

export default Dropdown;
