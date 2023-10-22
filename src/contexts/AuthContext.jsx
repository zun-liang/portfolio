/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userStatus, setUserStatus] = useState(null);
  useEffect(() => {
    const getUserStatus = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserStatus(true);
      } else {
        setUserStatus(false);
      }
    });
    return () => getUserStatus();
  }, []);
  return (
    <AuthContext.Provider value={userStatus}>{children}</AuthContext.Provider>
  );
};
export { AuthContext, AuthContextProvider };
