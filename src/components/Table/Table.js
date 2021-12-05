import styles from './Table.module.css';
import Th from "./Th";
import CheckBox from "../CheckBox/CheckBox";
import Td from "./Td";
import Tr from "./Tr";
import {dateFormat, moneyFormat} from "../../helpers";


const Table = ({orders}) => {
  const handleSort = () => {}
  return (
    <table className={styles.table}>
      <thead className={styles.table__thead}>
        <tr className={styles.table__header}>
          <Th width="3%">
            <CheckBox className={styles.table__checkbox} />
          </Th>
          <Th width="7%">#</Th>
          <Th onCLick={handleSort} width="13%">Дата</Th>
          <Th onCLick={handleSort} width="10%">Статус</Th>
          <Th onCLick={handleSort} width="10%">Позиций</Th>
          <Th onCLick={handleSort} width="10%">Сумма</Th>
          <Th onCLick={handleSort}>ФИО покупателя</Th>
        </tr>
      </thead>
      <tbody>
        {orders && orders.map(({id, name, status, count, sum, creationDate}) => (
          <Tr key={id}>
            <Td>
              <CheckBox className={styles.table__checkbox} onChange={() => console.log(id)} />
            </Td>
            <Td>{id}</Td>
            <Td>{dateFormat(creationDate)}</Td>
            <Td>{status}</Td>
            <Td>{count || '—'}</Td>
            <Td>{moneyFormat(sum)}</Td>
            <Td>{name}</Td>
          </Tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
