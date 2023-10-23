import ReactDOM from "react-dom/client";

import { ModeContextProvider } from "./contexts/ModeContext";
import ThemeWrapper from "./ThemeWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeContextProvider>
      <ThemeWrapper />
    </ModeContextProvider>
);
