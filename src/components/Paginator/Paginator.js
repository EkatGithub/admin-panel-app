import Button from "../Button/Button";
import styles from './Paginator.module.css';

const Paginator = () => {
  return (
    <div className={styles.paginator}>
      <Button color="blue" size="low">1</Button>
      <Button size="low">2</Button>
      <Button size="low">...</Button>
      <Button size="low">5</Button>
      <Button size="low" className={styles.paginator__number}>#</Button>
    </div>
  )
}
export default Paginator;