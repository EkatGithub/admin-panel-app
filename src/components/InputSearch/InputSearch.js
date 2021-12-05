import styles from './InputSearch.module.css';
import {Icon} from "../Icon/Icon";
import cn from "classnames";

const InputSearch = ({className, value = '', onChange, ...props}) => {
  return (
    <div className={cn(styles.search, className)}>
      <div className={styles.search__icon}>
        <Icon type="search" />
      </div>
      <input type="text" className={cn(styles.search__input)} {...props} />
      {value && (
        <button type="button" className={styles.search__clear}>
          <Icon type="close"/>
        </button>
      )}
    </div>
  )
};

export default InputSearch;
