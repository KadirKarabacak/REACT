// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// React-Query & Devtools
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Pages
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";

// Styles
import GlobalStyles from "./styles/GlobalStyles";

// Creating new QueryClient for React-Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000, // 1 Minute
      staleTime: 0,
    },
  },
});

function App() {
  return (
    // Providing our queryClient
    <QueryClientProvider client={queryClient}>
      {/* React-Query-Devtools*/}
      <ReactQueryDevtools initialIsOpen={false} />
      {/* Global Styles */}
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          {/* Creating parent element as always */}
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          {/* Login and pagenotfound is not childs */}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
