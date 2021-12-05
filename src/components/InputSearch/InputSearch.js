import styles from './InputSearch.module.css';
import { Icon } from "../Icon/Icon";
import cn from "classnames";

const InputSearch = ({ value, ...props }) => {
    return ( <
        div className = { styles.inputSearch } >
        <
        div className = { styles.search } >
        <
        Icon type = "search" / >
        <
        /div> <
        input type = "text"
        className = { cn('body-text', styles.input) } {...props }
        /> {
            value && ( <
                button type = "button"
                className = { styles.close } >
                <
                Icon type = "close" / >
                <
                /button>
            )
        } <
        /div>
    )
};

export default InputSearch;