/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = ({ authToken }) => {
  console.log(authToken);
  if (authToken === null) return <Navigate to="blogs/login" />;
  return <Outlet />;
};

export default AuthRequired;
