import styles from './Header.module.css';
import Button from "../Button/Button";
import cn from "classnames";

const Header = ({className}) => {
  return (
    <header className={cn(styles.header, className)}>
      <h1 className={cn('headline', styles.header__title)}>Список заказов</h1>
      <Button icon="sun">Светлая тема</Button>
    </header>
  );
}

export default Header;
