import Map from "../../components/Map/Map";
import Sidebar from "../../components/Sidebar/Sidebar";
import User from "../../components/User/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
