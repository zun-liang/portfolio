/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
