import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  // UseNavigate simply returns a function, just write which path u want to go. Same as NavLink feature.
  const navigate = useNavigate();

  // useSearchParams is a Router property which gives us URL params and query strings.
  const [searchParams, setSearchParams] = useSearchParams();
  // It returns an object includes our data, and we use it to get data like this.
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    // Onclick map, navigate to form
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
