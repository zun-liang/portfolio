import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import { SoundContextProvider } from "./contexts/SoundContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<SoundContextProvider><App /></SoundContextProvider>
);
