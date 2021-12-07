import styles from './Overlay.module.css';
import cn from "classnames";

const Overlay = ({show = false, ...props}) => {
  return (
    <div className={cn(styles.overlay, {
  [styles.hidden]: !show,
})} {...props}/>
  );
}
export default Overlay;
