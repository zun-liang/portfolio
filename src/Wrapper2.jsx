import { useContext } from "react";
import { ThemeProvider } from "styled-components";

import App from "./App.jsx";
import { SoundContextProvider } from "./contexts/SoundContext.jsx";
import { ThemeContext } from "./contexts/ThemeContext";

const Wrapper2 = () => {
  const { theme } = useContext(ThemeContext);
  const mode = { mode: theme };

  return (
    <ThemeProvider theme={mode}>
      <SoundContextProvider>
        <App />
      </SoundContextProvider>
    </ThemeProvider>
  );
};

export default Wrapper2;
