import {useState} from "react";
import styles from './Select.module.css';
import cn from "classnames";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import Dropdown from "../Dropdown/Dropdown";

const Select = ({className, items, label, select = 'Выберите значение', onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
  }
  return (
    <div className={cn(styles.select, className)}>
      {label && <p className={styles.select__label}>{label}</p>}
      <button className={styles.select__button} onClick={() => setIsOpen(!isOpen)} type="button">
        <p className={styles.select__name}>{select}</p>
        <ArrowIcon select={!isOpen} />
      </button>
      {isOpen && (
        <Dropdown className={styles.select__dropdown}>
          {items && items.map(({name, value}) => (
            <button key={value} className={styles.select__item} type="button" onClick={() => handleSelect(value)}>
              {name}
            </button>
          ))}
        </Dropdown>
      )}
    </div>
  );
}
export default Select;