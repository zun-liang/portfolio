import Pick from "../assets/sounds/pick.mp3";
import { SoundContext } from "./SoundContext";
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useSound from "use-sound";

const PlayPickContext = createContext();

const PlayPickContextProvider = ({ children }) => {
  const { sound } = useContext(SoundContext);
  const [playPick] = useSound(Pick, { soundEnabled: sound });

  return (
    <PlayPickContext.Provider value={playPick}>
      {children}
    </PlayPickContext.Provider>
  );
};

export { PlayPickContext, PlayPickContextProvider };
