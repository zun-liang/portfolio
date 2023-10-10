/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  //auth context??
  if (!authToken) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default AuthRequired;
