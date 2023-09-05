import { useState } from "react";
import styled from "styled-components";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import ContactForm from "./pages/ContactForm";
import { Routes, Route } from "react-router-dom";

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => (props.$theme ? "white" : "black")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const App = () => {
  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight);

  return (
    <AppContainer $theme={theme}>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} setTheme={setTheme} />}
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<ContactForm />} theme={theme} />
          </Route>
        </Routes>
      </main>
    </AppContainer>
  );
};

export default App;
