import styles from "./Wrapper.module.css";
import cn from "classnames";

const Wrapper = ({className, children}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {children}
    </div>
  );
}
export default Wrapper;
