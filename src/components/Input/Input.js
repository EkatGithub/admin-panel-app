import styles from './Input.module.css';
import cn from 'classnames';
import {Icon} from "../Icon/Icon";

export const Input = ({
    className,
    value = '',
    prepend,
    label = "",
    onChange,
    type = "test",
    disabled = false,
    error,
    ...props
  }) => {

  return (
    <div className={cn(styles.block, className)}>
      {label && <p className={cn(styles.label)}>{label}</p>}
      <div className={cn(styles.inputGroup, {
        [styles.filled]: error,
        [styles.disabled]: disabled,
      })}>
        {prepend && <span className={styles.prepend}>{prepend}</span>}
        <input className={cn(styles.input, {
          [styles.padding]: prepend,
        })} type={type} {...props} disabled={disabled} value={value} onChange={onChange} />
        {value && (
          <button type="button" className={styles.button} disabled={disabled}>
            <Icon type={disabled ? 'lock' : 'close'} />
          </button>
        )}
      </div>
    </div>
  );
}
