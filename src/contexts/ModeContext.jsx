/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [mode, setMode] = useState(isLight);
  return (
    <ModeContext.Provider value={{ mode, setMode, isLight }}>
      {children}
    </ModeContext.Provider>
  );
};

export { ModeContext, ModeContextProvider };
