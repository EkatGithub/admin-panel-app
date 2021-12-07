import styles from './App.module.css';
import {useState} from "react";
import cn from "classnames";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SettingsTable from "../SettingsTable/SettingsTable";
import OrderForm from "../OrderForm/OrderForm";
import OrderTable from "../OrderTable/OrderTable";

function App() {
  const [isDarkTheme,] = useState(false);
  return (
    <main className={cn(styles.main, {
      'light': !isDarkTheme,
      'dark': isDarkTheme,
    })}>
      <Header />
      <SettingsTable />
      <OrderTable />
      <Footer />
      <OrderForm />
    </main>
  );
}

export default App;
