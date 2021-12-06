import styles from './App.module.css';
import {useState} from "react";
import cn from "classnames";
import Header from "../Header/Header";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
import SettingsTable from "../SettingsTable/SettingsTable";

function App() {
  const [isDarkTheme,] = useState(false);
  return (
    <main className={cn(styles.main, {
      'light': !isDarkTheme,
      'dark': isDarkTheme,
    })}>
      <Header />
      <SettingsTable />
      <Table />
      <Footer />
    </main>
  );
}

export default App;