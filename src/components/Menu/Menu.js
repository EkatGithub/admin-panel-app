import styles from "./Menu.module.css";
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import {getSelectedOrders} from "../../store/orders";
const Menu = () => {
  const orders = useSelector((state) => getSelectedOrders(state));
  return (
    <div className={styles.menu}>
      <p className={styles.menu__count}>Выбрано записей: {orders.length}</p>
      <Button icon="edit" color="blue" size="low">Изменить статус</Button>
      <Button icon="delete" color="red" size="low">Удалить</Button>
    </div>
  );
};
export default Menu;