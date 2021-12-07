import {memo} from "react";
import styles from "./Table.module.css";
import {Th} from "./Th";
import CheckBox from "../CheckBox/CheckBox";
import {fieldsHead} from "./Table.constants";
import {Tr} from "./Tr";

export const Thead = memo(({onAllSelect, onSort, select, isAscending}) => {
  return (
    <thead className={styles.table__thead}>
      <Tr type="head">
        <Th width="3%">
          <CheckBox
            onChange={(e) => onAllSelect(e.target.checked)}
            className={styles.table__checkbox}
          />
        </Th>
        <Th width="7%">#</Th>
        {fieldsHead.map(({name, value, width}) => (
          <Th
            key={name}
            onClick={() => onSort(value)}
            width={width}
            select={select === value}
            isAscending={isAscending}>
            {name}
          </Th>
        ))}
        <Th>ФИО покупателя</Th>
      </Tr>
    </thead>
  )
});
