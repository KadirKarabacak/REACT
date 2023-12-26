import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/* This "Outlet" component comes from App.jsx child routes. Its a router feature. */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
