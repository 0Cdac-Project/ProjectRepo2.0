import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "./Redux/Reducer/userslice";
import axios from "axios";

function ProtectedRoute(props) {
  const dispatch = useDispatch();
  const handleSetUser = async(decoded) => {
    var url = "";
    if (decoded.category === "patients") {
      url = `http://localhost:8080/api/v1/patient/findUser/${decoded.username}`;
    } else if (decoded.category === "doctors") {
      url = `http://localhost:8080/api/v1/doctor/findUser/${decoded.username}`;
    } else {
      url = `http://localhost:8080/api/v1/management/findUser/${decoded.username}`;
    }
    await axios
      .get(url)
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const location = useLocation();
  const { pathname } = location;
  const token = window.sessionStorage.getItem("token");
  const navigate = useNavigate();
  React.useEffect(() => {
    if (token == null) {
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
    if (diff <= 30) {
      if (decoded.category === "patients" || decoded.category === "doctors") {
        if (pathname.includes(decoded.category.slice(0, -1))) {
          handleSetUser(decoded);
          return <Outlet />;
        } else {
          return <Navigate to="/" replace />;
        }
      } else {
        if (pathname.includes(decoded.type)) {
          handleSetUser(decoded);
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
