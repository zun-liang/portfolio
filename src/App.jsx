import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import GlobalStyles from "./GlobalStyles";
import Loading from "./pages/Loading";
import Error from "./pages/Error";

const AppContainer = styled.div`
  width: 100vw;
  height: var(--app-height);
`;

const App = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight);

  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", setAppHeight);
    setAppHeight();
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  const initialFavicon32 = isLight
    ? "/favicon-32x32-light.png"
    : "/favicon-32x32.png";
  const [faviconHref32, setFaviconHref32] = useState(initialFavicon32);
  useEffect(() => {
    const favicon32 = document.getElementById("favicon32");
    favicon32.href = faviconHref32;
    setFaviconHref32(theme ? "/favicon-32x32.png" : "/favicon-32x32-light.png");
  }, [theme]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <>
      <GlobalStyles $theme={theme} />
      <AppContainer>
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} setTheme={setTheme} />}
          >
            <Route index element={<Home theme={theme} />} />
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
