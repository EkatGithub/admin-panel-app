import {memo} from "react";
import {Tr, Td} from ".";
import CheckBox from "../CheckBox/CheckBox";
import styles from "./Table.module.css";
import {dateFormat, moneyFormat} from "../../helpers";
import Status from "../Status/Status";

export const Tbody = memo(({orders, onSelect, onEdit}) => {
  return (
    <tbody>
      {orders && orders.map((order) => {
        const {id, name, status, count, sum, creationDate, select} = order;
        return (
          <Tr key={id}>
            <Td>
            <CheckBox
              className={styles.table__checkbox}
              onChange={(e) => onSelect(id, e.target.checked)}
              checked={!!select}
            />
            </Td>
            <Td onClick={() => onEdit(order)}>{id}</Td>
            <Td onClick={() => onEdit(order)}>{dateFormat(creationDate)}</Td>
            <Td onClick={() => onEdit(order)}><Status name={status} value={status}/></Td>
            <Td onClick={() => onEdit(order)}>{count || '—'}</Td>
            <Td onClick={() => onEdit(order)}>{moneyFormat(sum)}</Td>
            <Td onClick={() => onEdit(order)}>{name}</Td>
          </Tr>
        )
      })}
    </tbody>
  )
});
