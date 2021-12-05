import cn from "classnames";
import styles from './Button.module.css';
import {Icon} from "../Icon/Icon";
const Button = ({className, icon, type = 'button', children, background = false, ...props}) => {

 return (
   <button className={cn(styles.button, {
     [styles.background]: background,
   }, className)} type={type} {...props}>
     {icon && <Icon type={icon} style={{marginRight: 8}} />} {children}
   </button>
 )
}

export default Button;
