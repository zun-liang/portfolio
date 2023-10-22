/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SoundContext = createContext();

const SoundContextProvider = ({ children }) => {
  const [sound, setSound] = useState(false);
  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundContext, SoundContextProvider };
