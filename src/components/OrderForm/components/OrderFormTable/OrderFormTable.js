import {Table, Td, Th, Tr} from "../../../Table";
import {moneyFormat} from "../../../../helpers";

export const OrderFormTable = ({products}) => {
  return (
    <Table>
      <thead>
        <Tr type="head">
          <Th width="25%">Артикул</Th>
          <Th>Наименование</Th>
          <Th width="30%">Цена</Th>
        </Tr>
      </thead>
      <tbody>
        {products && products.map(({article, name, price}, i) => (
          <Tr key={i}>
            <Td>{article}</Td>
            <Td>{name}</Td>
            <Td>{moneyFormat(price)}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
