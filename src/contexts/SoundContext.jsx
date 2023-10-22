/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SoundContext = createContext();
const SoundContextProvider = ({ children }) => {
  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [sound, setSound] = useState(isLight);
  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundContext, SoundContextProvider };
