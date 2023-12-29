import { Link } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNavigation />
      <section>
        <h1>
          DestinationDiary.
          <br />
          Your personalized travel memoir.
        </h1>
        <h2>
          Capture every step of your journey with our interactive map, where
          each pin represents a cherished adventure. Pen down vivid diary
          entries. Join a vibrant community of explorers, where your wanderlust
          stories find a home.
        </h2>
        <Link to="/app" className="cta">
          Start journaling
        </Link>
      </section>
    </main>
  );
}
