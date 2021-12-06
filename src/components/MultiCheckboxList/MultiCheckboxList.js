import styles from './MultiCheckboxList.module.css';
import {useCallback, useEffect, useState} from "react";
import cn from "classnames";
import Dropdown from "../Dropdown/Dropdown";
import CheckBox from "../CheckBox/CheckBox";
import ArrowIcon from "../ArrowIcon/ArrowIcon";

const MultiCheckboxList = ({
    items,
    selected,
    defaultValue = 'Выберите значение',
    label = '',
    handleSelect,
  }) => {
  const [value, setValue] = useState('');
  const [viewDropDown, setViewDropDown] = useState(false);

  useEffect(() => {
    if (!value || !selected.length) {
      setValue(defaultValue);
    }
  }, [defaultValue, setValue, selected, value]);

  const handleChangeViewDropDown = useCallback(() => {
    setViewDropDown(!viewDropDown);
  }, [setViewDropDown, viewDropDown]);

  const handleSelectItem = useCallback((value, status) => {
    const values = (status) ? [value, ...selected] : selected.filter((item) => item !== value);
    const valueString = values.length ? values.reduce((str, item, i) => {
      if (i < 3) {
        str += item + ';';
      }
      if (i === 3) {
        return str + '...';
      }
      return str;
    }, '') : defaultValue;
    handleSelect(values);
    setValue(valueString);
  }, [selected, defaultValue, handleSelect]);

  return (
    <div className={cn(styles.multiCheckboxListGroup)}>
      {label && <p className={styles.label}>{label}</p>}
      <button className={styles.button} onClick={handleChangeViewDropDown} type="button">
        <p className={styles.value}>{value}</p>
        <ArrowIcon select={!viewDropDown} />
      </button>
      {viewDropDown && (
        <Dropdown className={styles.dropdown}>
          {items && items.map(({name, value}) => {
            const status = selected.includes(value);
            return <CheckBox
              key={name}
              checked={status}
              onChange={() =>
              handleSelectItem(value, !status)}
              className={styles.checkbox}
              label={name}
            />
          })}
        </Dropdown>
      )}
    </div>
  );
}
export default MultiCheckboxList