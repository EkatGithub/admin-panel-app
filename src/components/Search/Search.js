import styles from './Search.module.css';
import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";

const Search = () => {
  return (
    <section className={styles.search}>
      <div className={styles.searchBlock}>
        <InputSearch className={styles.search__input} placeholder="Номер заказа или ФИО" />
        <Button className={styles.button} icon="filter" background={true}>Фильтры</Button>
        <Button className={styles.button}>Сбросить фильтры</Button>
      </div>
      <Button className={styles.button} icon="refresh">Загрузка</Button>
    </section>
  );
};

export default Search;
