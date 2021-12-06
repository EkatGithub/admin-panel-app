import {useCallback} from "react";
import styles from "./Menu.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getSelectedOrders, ordersActions} from "../../store/orders";
import {ButtonDelete, ButtonStatus} from "./components";
import {statusesList} from "../../constants/statusesList";


const Menu = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => getSelectedOrders(state));
  const count = orders.length;
  const handleDelete = useCallback(() => {
    const ordersIds = orders.map(({id}) => id);
    dispatch(ordersActions.ordersDelete(ordersIds));
  }, [orders, dispatch]);

  const handleSelect = useCallback((status) => {
    console.log(orders)
    dispatch(
      ordersActions.changeStatus(
        orders.map((order) => ({
          ...order,
          select: false,
          status,
        }))
      )
    );
  }, [orders, dispatch])

  return (
    <div className={styles.menu}>
      <p className={styles.menu__count}>Выбрано записей: {count}</p>
      <ButtonStatus
        count={count}
        onSelect={handleSelect}
        items={statusesList}
      />
      <ButtonDelete
        count={count}
        onDelete={handleDelete}
      />
    </div>
  );
};
export default Menu;