import styles from './Header.module.css';
import Button from "../Button/Button";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Список заказов</h1>
      <Button icon="sun">Светлая тема</Button>
    </header>
  );
}

export default Header;
