// Make sure you import those for router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Homepage from "./pages/HomePage/Homepage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AppLayout from "./pages/AppLayout/AppLayout";
import Login from "./pages/Login/Login";
import CityList from "./components/CityList/CityList";
import CountryList from "./components/CountryList/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

function App() {
  //  To create our own custom hook with Context API cut all states and effects to CitiesContext
  return (
    <AuthProvider>
      <CitiesProvider>
        {/* Also i need BrowserRouter and Routes before Route. */}
        <BrowserRouter>
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
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
