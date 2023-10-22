/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AuthRequired = () => {
  const loggedin = useContext(AuthContext);
  if (!loggedin) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default AuthRequired;
//if i type in logout in url, this showed, after logged in, it redirects me to editor instead of what i want
