import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

// Created this for a Parent Route contains every other child routes
function AppLayout() {
  // useNavigation controls our entire app if it is "idle", "loading", etc...
  // Useful to display a loader in every place.
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {/* Shows loader before data arrived */}
      {isLoading && <Loader />}
      <Header />
      <main>
        {/* To use child Routes its Outlet! */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
