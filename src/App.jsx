import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const AppContainer = styled.div`
  width: 100vw;
  //min-height: 100vh;
  background-color: ${(props) => (props.$theme ? "white" : "black")};
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
            <Route path="contact" element={<Contact />} theme={theme} />
          </Route>
        </Routes>
      </main>
    </AppContainer>
  );
};

export default App;
