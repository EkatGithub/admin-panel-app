import {Input} from "../Input/Input";
import styles from './App.module.css';
import {useState} from "react";
import cn from "classnames";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import CheckBox from "../CheckBox/CheckBox";
import Table from "../Table/Table";
import {orders} from "../../constants/orders";
import Footer from "../Footer/Footer";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <main className={cn(styles.main, {
      'light': !isDarkTheme,
      'dark': isDarkTheme,
    })}>
      <Header />
      <div>
        <Search />
        <Filter />
      </div>
      <div className={styles.main__table}>
        <Table orders={orders} />
      </div>
      <Footer />
    </main>
  );
}

export default App;
