import styles from "./OrderFormHeader.module.css";
import cn from "classnames";
import {Icon} from "../../../Icon/Icon";

export const OrderFormHeader = ({number, onClose}) => {
  return (
    <div className={styles.popup__header}>
      <h1 className={cn('headline', styles.popup__title)}>
        Заказ #{number}
      </h1>
      <Icon
        type="close"
        style={{
          width: '20px',
          height: '20px',
          cursor: 'pointer'
        }}
        color="#fff"
        onClick={onClose}
      />
    </div>
  )
}
