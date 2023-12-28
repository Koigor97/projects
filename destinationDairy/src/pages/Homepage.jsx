import { Link } from "react-router-dom";
import PageNavigation from "../components/PageNavigation";

function Homepage() {
  return (
    <div>
      <PageNavigation />
      <h1>DestionDairy</h1>
      <Link to="/app">Go to App</Link>
    </div>
  );
}

export default Homepage;
