import { useState } from "react";
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = ({ authToken }) => {
  if (!authToken) return <Navigate to="/login" />;
  return <Outlet />;
};

export default AuthRequired;
