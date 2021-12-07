import cn from "classnames";
import styles from "./ArrowIcon.module.css";
import {Icon} from "../Icon/Icon";

const ArrowIcon = ({select, className, color}) => {
  return (
    <span className={cn(styles.icon, {
      [styles.icon__select]: select,
    }, className)}>
      <Icon type="arrow-down" color={color} />
    </span>
  );
};
export default ArrowIcon;
