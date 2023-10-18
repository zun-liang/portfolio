/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  //auth context??
  if (!authToken) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default AuthRequired;
//if i type in logout in url, this showed, after logged in, it redirects me to editor instead of what i want
