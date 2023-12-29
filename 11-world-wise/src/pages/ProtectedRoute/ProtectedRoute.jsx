import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/FakeAuthContext";
import { useEffect } from "react";

// Protecting app route before login
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      // If no login yet, never show app, always redirect to home
      if (!isAuthenticated) navigate("/", { replace: false });
    },
    [isAuthenticated, navigate]
  );

  // Also our user into children, so if authenticated is true then show childrens.
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
