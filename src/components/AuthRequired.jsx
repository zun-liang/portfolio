/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  if (!authToken) return <Navigate to="/login" />;
  return <Outlet />;
};

export default AuthRequired;
