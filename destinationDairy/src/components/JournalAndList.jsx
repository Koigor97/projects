import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./JournalList.module.css";
import { Outlet } from "react-router-dom";

function JournalAndList() {
  return (
    <div className={styles.topDiv}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by DestinationDairy Inc.
        </p>
      </footer>
    </div>
  );
}

export default JournalAndList;
