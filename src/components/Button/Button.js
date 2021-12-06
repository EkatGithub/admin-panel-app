import cn from "classnames";
import styles from './Button.module.css';
import {Icon} from "../Icon/Icon";
const Button = ({
    className,
    icon,
    type = 'button',
    children,
    background = false,
    size = 'medium',
    color,
    styleIcon,
    ...props
  }) => {
   return (
     <button className={cn(styles.button, {
       [styles.button__size_medium]: size === 'medium',
       [styles.button__size_low]: size === 'low',
       [styles.button__background_blue]: color && color==='blue',
       [styles.button__background_red]: color && color==='red',
     }, className)} type={type} {...props}>
       {icon && <Icon type={icon} style={styleIcon ? styleIcon : {marginRight: 8} }/>} {children}
     </button>
   )
}

export default Button;