import JournalAndList from "../components/JournalAndList";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <JournalAndList />
      <Map />
    </div>
  );
}

export default AppLayout;
