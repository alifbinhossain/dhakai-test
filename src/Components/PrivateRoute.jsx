import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return children;
};

export default PrivateRoute;
