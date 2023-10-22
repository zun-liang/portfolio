import { ThemeContextProvider } from "./contexts/ThemeContext";
import Wrapper2 from "./Wrapper2";

const Wrapper = () => {
  return (
    <ThemeContextProvider>
      <Wrapper2 />
    </ThemeContextProvider>
  );
};

export default Wrapper;
