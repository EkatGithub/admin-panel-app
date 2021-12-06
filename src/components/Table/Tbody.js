import {memo} from "react";
import Tr from "./Tr";
import Td from "./Td";
import CheckBox from "../CheckBox/CheckBox";
import styles from "./Table.module.css";
import {dateFormat, moneyFormat} from "../../helpers";
import Status from "../Status/Status";

const Tbody = memo(({orders, onSelect}) => {
  return (
    <tbody>
      {orders && orders.map(({id, name, status, count, sum, creationDate, select}) => (
        <Tr key={id}>
          <Td>
            <CheckBox
              className={styles.table__checkbox}
              onChange={(e) => onSelect(id, e.target.checked)}
              checked={!!select}
            />
          </Td>
          <Td>{id}</Td>
          <Td>{dateFormat(creationDate)}</Td>
          <Td><Status name={status} value={status}/></Td>
          <Td>{count || '—'}</Td>
          <Td>{moneyFormat(sum)}</Td>
          <Td>{name}</Td>
        </Tr>
      ))}
    </tbody>
  )
});
export default Tbody;