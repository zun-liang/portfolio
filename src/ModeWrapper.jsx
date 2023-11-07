import { ModeContextProvider } from "./contexts/ModeContext";
import ThemeWrapper from "./ThemeWrapper";

const ModeWrapper = () => {
  return (
    <ModeContextProvider>
      <ThemeWrapper />
    </ModeContextProvider>
  );
};

export default ModeWrapper;
