import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
function ProtectedRoute(props) {
  const location = useLocation();
  const { pathname } = location;
  const token = window.sessionStorage.getItem("token");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token == null) {
      console.log(token);
      navigate("/loginSignup", {
        replace: true,
        state: { from: props.location },
      });
    }
  }, [navigate, token, props.location]);

  if (token != null) {
    const decoded = jwtDecode(token.toString());
    var d = new Date().getTime() / 60000;
    var diff = d - decoded.login_date / 60000;
    if (diff <= 20) {
      if (decoded.category === "patients" || decoded.category === "doctors") {
        if (pathname.includes(decoded.category.slice(0, -1))) {
          return <Outlet />;
        } else {
          return <Navigate to="/" replace />;
        }
      } else {
        if (pathname.includes(decoded.type)) {
          return <Outlet />;
        } else {
          return <Navigate to="/" replace />;
        }
      }
    } else {
      return <Navigate to="/" replace />;
    }
  } else {
    return <Navigate to="/" replace />;
  }
}

export default ProtectedRoute;
