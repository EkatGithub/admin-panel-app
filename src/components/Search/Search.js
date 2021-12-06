import {memo, useCallback} from "react";
import styles from './Search.module.css';
import InputSearch from "../InputSearch/InputSearch";
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {getFieldOrderOrFio, searchActions} from "../../store/search";

const Search = memo(({onFilter, onClearFilter}) => {
  const dispatch = useDispatch();
  const valueOrderOrFio = useSelector((state) => getFieldOrderOrFio(state));

  const handleSetOrderOrFioSearch = useCallback((value) => {
    dispatch(searchActions.setNumberOrFio(value));
  }, [dispatch]);

  const handleClear = useCallback(() => dispatch(searchActions.setNumberOrFio('')), [dispatch]);

  return (
    <section className={styles.search}>
      <div className={styles.searchBlock}>
        <InputSearch
          className={styles.search__input}
          placeholder="Номер заказа или ФИО"
          value={valueOrderOrFio}
          onChange={handleSetOrderOrFioSearch}
          onClear={handleClear}
        />
        <Button className={styles.button} icon="filter" color="blue" onClick={onFilter}>Фильтры</Button>
        <Button className={styles.button} onClick={onClearFilter}>Сбросить фильтры</Button>
      </div>
      <Button className={styles.button} icon="refresh">Загрузка</Button>
    </section>
  );
});

export default Search;