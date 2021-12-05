import styles from './Filter.module.css';
import {Input} from "../Input/Input";
import Button from "../Button/Button";
import MultiCheckboxList from "../MultiCheckboxList/MultiCheckboxList";
import {itemsStatusesList} from "./Filter.constants";
import {useCallback, useState} from "react";

const Filter = () => {
  const [selected, setSelected] = useState([]);
  const handleSelect = useCallback((values) => setSelected(values), [setSelected])

  return (
    <section className={styles.filter}>
      <Input className={styles.filter__input} placeholder="dd.mm.dddd" label="Дата оформления" value="06.12.2021" prepend="c" />
      <Input className={styles.filter__input} placeholder="dd.mm.dddd" prepend="по" />
      <MultiCheckboxList
        label="Статус заказа"
        defaultValue="Любой"
        items={itemsStatusesList}
        handleSelect={handleSelect}
        selected={selected}
      />
      <Input className={styles.filter__input} placeholder="dd.mm.dddd" label="Сумма заказа" prepend="от" value="5000" />
      <Input className={styles.filter__input} placeholder="dd.mm.dddd" prepend="до" />
      <Button className={styles.filter__button}>Применить</Button>
    </section>
  )
};
export default Filter;
