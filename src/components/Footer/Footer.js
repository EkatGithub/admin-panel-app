import styles from './Footer.module.css';
import cn from "classnames";
import Paginator from "../Paginator/Paginator";
import Menu from "../Menu/Menu";

const Footer = ({className}) => {
  return (
    <footer className={cn(styles.footer, className)} >
      <Menu />
      <Paginator />
    </footer>
  );
};
export default Footer;