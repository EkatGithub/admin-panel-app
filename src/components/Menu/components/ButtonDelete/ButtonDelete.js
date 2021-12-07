import {memo, useState} from "react";
import styles from "./ButtonDelete.module.css";
import Dropdown from "../../../Dropdown/Dropdown";
import Button from "../../../Button/Button";
import cn from "classnames";

export const ButtonDelete = memo(({count, onDelete, ...props}) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const isDisabled = !count;
  const handleClick = () => {
    setIsConfirm(false);
    onDelete();
  }
  return (
    <div className={styles.menu__delete}>
      {isConfirm && (
        <Dropdown className={styles.menu__dropdown}>
          <p>Удалить {count} записей?</p>
          <Button className={styles.menu__button} size="low" onClick={handleClick}>Удалить</Button>
          <Button className={styles.menu__button} color="blue" size="low" onClick={() => setIsConfirm(false)} >Отмена</Button>
        </Dropdown>
      )}
      <Button
        className={cn({
          'disabled': isDisabled
        })}
        icon="delete"
        color="red"
        size="low"
        disabled={isDisabled}
        onClick={() => setIsConfirm(!isConfirm)}
        {...props}
      >
        Удалить
      </Button>
    </div>
  );
});
