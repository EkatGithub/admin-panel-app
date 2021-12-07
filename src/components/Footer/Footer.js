import styles from './Footer.module.css';
import cn from "classnames";
import Menu from "../Menu/Menu";
import Pagination from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {searchOrders} from "../../store/search";
import {useCallback} from "react";
import {paginationActions} from "../../store/pagination";

const Footer = ({className}) => {
  const dispatch = useDispatch();
  const {orders} = useSelector((state) => searchOrders(state));
  const handleSelectPage = useCallback(({currentPage}) => {
    dispatch(paginationActions.setPage(currentPage));
  }, [dispatch]);
  return (
    <footer className={cn(styles.footer, className)} >
      <Menu />
      <Pagination totalRecords={orders.length} pageLimit={10} onPageChanged={handleSelectPage} />
    </footer>
  );
};
export default Footer;
