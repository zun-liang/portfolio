import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import GlobalStyles from "./GlobalStyles";

const AppContainer = styled.div`
  width: 100vw;
`;

const App = () => {
  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight);

  return (
    <>
      <GlobalStyles $theme={theme} />
      <AppContainer>
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} setTheme={setTheme} />}
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About theme={theme} />} />
            <Route path="projects" element={<Projects theme={theme} />} />
            <Route path="blog" element={<Blog theme={theme} />} />
            <Route
              path="contact"
              element={<Contact theme={theme} />}
              theme={theme}
            />
          </Route>
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
