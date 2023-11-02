import { useContext } from "react";
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

const AuthRequired = () => {
  const loggedin = useContext(AuthContext);
  if (!loggedin) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default AuthRequired;