import {useDispatch, useSelector} from "react-redux";
import styles from './Table.module.css';
import Thead from "./Thead";
import {useCallback, useState} from "react";
import {ordersActions} from "../../store/orders";
import Tbody from "./Tbody";
import {getOrderList} from "../../store/orders";
import {searchOrders} from "../../store/search";

const Table = () => {
  const [sortOption, setSortOption] = useState({value: '', isAscending: false});
  const dispatch = useDispatch();
  const orders = useSelector((state) => getOrderList(searchOrders(state)));

  const handleSort = useCallback((nameKey) => {
    const {isAscending} = sortOption;
    dispatch(ordersActions.sort({isAscending: !isAscending, nameKey}));
    setSortOption({
      value: nameKey,
      isAscending: !isAscending
    });
  }, [dispatch, sortOption]);

  const handleAllSelect = useCallback((status) => {
    dispatch(ordersActions.selectGroup({
      status,
      ordersIds: orders.map(({id}) => id),
    }));
  }, [orders, dispatch]);

  const handleSelect = useCallback((id, status) => {
    dispatch(ordersActions.select({id, status}));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <Thead onAllSelect={handleAllSelect} onSort={handleSort} select={sortOption.value} isAscending={sortOption.isAscending} />
        <Tbody orders={orders} onSelect={handleSelect} />
      </table>
    </div>
  );
}
export default Table;