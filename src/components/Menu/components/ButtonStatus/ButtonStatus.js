import {useState} from "react";
import styles from "./ButtonStatus.module.css";
import Dropdown from "../../../Dropdown/Dropdown";
import Button from "../../../Button/Button";
import cn from "classnames";

export const ButtonStatus = ({count, onSelect, items, ...props}) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const isDisabled = !count;
  const handleClick = (value) => {
    setIsConfirm(false);
    onSelect(value);
  }
  return (
    <div className={styles.menu__status}>
      {isConfirm && (
        <Dropdown className={styles.menu__dropdown}>
          {items && items.map(({name, value}) => (
            <button key={value} className={styles.menu__item} type="button" onClick={() => handleClick(value)}>
              {name}
            </button>
          ))}
        </Dropdown>
      )}
      <Button
        className={cn({
          'disabled': isDisabled
        })}
        icon="edit"
        color="blue"
        size="low"
        disabled={isDisabled}
        onClick={() => setIsConfirm(!isConfirm)}
        {...props}
      >
        Изменить статус
      </Button>
    </div>
  );
}