/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const LogoutContext = createContext();

const LogoutContextProvider = ({ children }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <LogoutContext.Provider value={{ showLogout, setShowLogout }}>
      {children}
    </LogoutContext.Provider>
  );
};

export { LogoutContext, LogoutContextProvider };
