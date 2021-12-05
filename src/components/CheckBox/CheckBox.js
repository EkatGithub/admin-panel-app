import styles from './CheckBox.module.css';
import cn from "classnames";

const CheckBox = ({ className, label, ...props }) => {
        return ( <
            label className = { cn(styles.checkboxGroup, className) } >
            <
            input type = "checkbox"
            className = { styles.checkbox } {...props }
            /> {
                label && < p className = { styles.label } > { label } < /p>} <
                    /label>
            );
        }
        export default CheckBox