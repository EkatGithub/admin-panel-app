import {memo, useCallback, useEffect, useMemo, useState} from "react";
import styles from './OrderForm.module.css';
import cn from "classnames";
import {Input} from "../Input/Input";
import Button from "../Button/Button";
import Wrapper from "../Wrapper/Wrapper";
import {OrderFormHeader, OrderFormTable} from "./components";
import Select from "../Select/Select";
import {statusesList} from "../../constants/statusesList";
import {dateFormat, moneyFormat} from "../../helpers";

const OrderForm = memo(({isOpen, onClose, order, onSubmit}) => {

  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    setData(order || {});
    setError('');
    return () => setData({});
  }, [order]);

  const {id = '', name = '', status = '', creationDate = '', confirmCode = '', products = [], loyalty} = data;
  const sum = useMemo(() => products.reduce((sum, {price}) => sum+price, 0), [products]);

  const handleSubmit = useCallback(() => {
    if (confirmCode !== verificationCode) {
      setError('Не правильный код');
    } else {
      onSubmit(data);
    }
  }, [onSubmit, verificationCode, confirmCode, data]);

  const handleChange = useCallback((value, key) => {
    setData({
      ...data,
      [key]: value,
    })
  }, [data])

  if (!id) {
    return null;
  }
  return (
    <div className={cn(styles.popup, {
      [styles.popup_opened]: isOpen,
      [styles.popup_hidden]: !isOpen,
    })}>
      <OrderFormHeader number={id} onClose={onClose} />
      <Wrapper>
        <form className={styles.popup__form}>
          <Input
            label="Дата и время заказа"
            className={styles.popup__input}
            value={dateFormat(creationDate)}
            disabled={true}
          />
          <Input
            label="ФИО Покупателя"
            className={styles.popup__input}
            value={name}
            onChange={(e) => handleChange(e.target.value, 'name')}
          />
          {products && products.length > 0 && (
            <>
              <OrderFormTable products={products} />
              <div className={cn(styles.popup__footer, styles.popup__sum)}>
                <p>Итоговая сумма: {moneyFormat(sum)}</p>
              </div>
            </>
          )}

          <Input
            label="Уровень лояльности"
            className={styles.popup__input}
            value={loyalty}
            disabled={true}
          />
          {status !== 'Отменен' ? (
              <Select
                label="Статус"
                className={styles.popup__input}
                select={status}
                items={statusesList}
                onSelect={(value) => handleChange(value, 'status')}
              />
          ) : (
            <Input
              label="Статус"
              className={styles.popup__input}
              value={status}
              disabled={true}
            />
          )}
          <Input
            label="Код подтверждения"
            className={styles.popup__input}
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />

        </form>
      </Wrapper>
      <div className={styles.popup__footer}>
        {error && <p className={styles.popup__error}>{error}</p>}
        <Button color="blue" icon="done" onClick={handleSubmit}>Сохранить</Button>
      </div>
    </div>
  );
});
export default OrderForm;