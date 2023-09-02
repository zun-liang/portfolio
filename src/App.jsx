import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => (props.$theme ? "white" : "black")};
`;

const App = () => {
  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight);

  return (
    <AppContainer $theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <ContactForm theme={theme} />
      <Footer theme={theme} />
    </AppContainer>
  );
};

export default App;
