import styles from './Header.module.css';
import cn from "classnames";
import Button from "../Button/Button";
const Header = () => {
    return ( <
        header className = { styles.header } >
        <
        h1 className = { cn('headline', styles.title) } > Список заказов < /h1> <
        Button icon = "sun" > Светлая тема < /Button> <
        /header>
    );
}

export default Header;