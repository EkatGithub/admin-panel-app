import {memo} from "react";

import styles from './Filter.module.css';
import {Input} from "../Input/Input";
import Button from "../Button/Button";
import MultiCheckboxList from "../MultiCheckboxList/MultiCheckboxList";
import {itemsStatusesList} from "./Filter.constants";

const Filter = memo(({fields, setFields, onSelectStatuses, onSubmit}) => {
  const {dateStart = '', dateEnd = '', statuses = [], ofSum = '', toSum = ''} = fields;
  return (
    <section className={styles.filter}>
      <Input
        className={styles.filter__input}
        placeholder="dd.mm.dddd"
        label="Дата оформления"
        prepend="c"
        name="dateStart"
        value={dateStart}
        onChange={setFields}
      />
      <Input
        className={styles.filter__input}
        placeholder="dd.mm.dddd"
        prepend="по"
        name="dateEnd"
        value={dateEnd}
        onChange={setFields}
      />
      <MultiCheckboxList
        label="Статус заказа"
        defaultValue="Любой"
        items={itemsStatusesList}
        handleSelect={(values) => onSelectStatuses(values)}
        selected={statuses}
      />
      <Input
        className={styles.filter__input}
        placeholder="dd.mm.dddd"
        label="Сумма заказа"
        prepend="от"
        name="ofSum"
        value={ofSum}
        onChange={setFields}
      />
      <Input
        className={styles.filter__input}
        placeholder="dd.mm.dddd"
        prepend="до"
        name="toSum"
        value={toSum}
        onChange={setFields}
      />
      <Button className={styles.filter__button} onClick={onSubmit}>Применить</Button>
    </section>
  )
});
export default Filter;