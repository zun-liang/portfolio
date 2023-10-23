import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import App from "./App.jsx";
import { ModeContext } from "./contexts/ModeContext.jsx";
import { SoundContextProvider } from "./contexts/SoundContext.jsx";

const ThemeWrapper = () => {
  const { mode } = useContext(ModeContext);
  const theme = { mode: mode};

  return (
    <ThemeProvider theme={theme}>
      <SoundContextProvider>
        <App />
      </SoundContextProvider>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
