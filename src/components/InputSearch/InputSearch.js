import styles from './InputSearch.module.css';
import {Icon} from "../Icon/Icon";
import cn from "classnames";

const InputSearch = ({className, onChange, value = '', onClear, ...props}) => {
  return (
    <div className={cn(styles.search, className)}>
      <div className={styles.search__icon}>
        <Icon type="search" />
      </div>
      <input
        className={cn(styles.search__input)}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
         {...props}
      />
      {value && (
        <button type="button" className={styles.search__clear} onClick={onClear} >
          <Icon type="close"/>
        </button>
      )}
    </div>
  )
};

export default InputSearch;