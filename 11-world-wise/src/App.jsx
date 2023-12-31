// Make sure you import those for router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";

// Applayout components
import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";

// This 6 page need codesplitting.
// import Product from "./pages/Product/Product";
// import Pricing from "./pages/Pricing/Pricing";
// import Homepage from "./pages/HomePage/Homepage";
// import Login from "./pages/Login/Login";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import PageNotFound from "./pages/PageNotFound/PageNotFound";

//! LAZY BUILD (Means download pages when we really need to split bundle)
const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Product = lazy(() => import("./pages/Product/Product"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Login = lazy(() => import("./pages/Login/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));

//! OLD BUILD
// dist/assets/index-5095f862.css   32.54 kB │ gzip:   5.37 kB
// dist/assets/index-06cb0807.js   533.05 kB │ gzip: 150.94 kB

function App() {
  //  To create our own custom hook with Context API cut all states and effects to CitiesContext
  return (
    <AuthProvider>
      <CitiesProvider>
        {/* Also i need BrowserRouter and Routes before Route. */}
        <BrowserRouter>
          {/* And after we split bundle with lazy, use suspense-fallback */}
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />

              {/* Here we need some nested Routes */}
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* Here instead of pass CityList element on index Route, just use Navigate */}
                <Route index element={<Navigate to="cities" />} />
                <Route path="cities" element={<CityList />} />
                {/* This Route for set state into URL. Linking in CityItem Each li. */}
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
                {/* "*" Selects all other paths we are not matched. And shows page not found. */}
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
