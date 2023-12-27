import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

// Formatting date
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

// Each "li" on CityList
function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;

  return (
    <li>
      {/* And then we pass id in "to" prop, After id for "Query string" add a ? mark and use position coords */}
      <Link
        className={styles.cityItem}
        // Here, after the id we read those position query strings into Map.jsx with useSearchParams
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
