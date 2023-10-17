import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import styled from "styled-components";

import AuthRequired from "./components/AuthRequired";
import Layout from "./components/Layout";
import GlobalStyles from "./GlobalStyles";
import About from "./pages/About";
import Blog, { loader as blogLoader } from "./pages/Blog";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import Contact from "./pages/Contact";
import Editor from "./pages/Editor";
import Error from "./pages/Error";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Login, { action as loginAction } from "./pages/Login";
import Logout from "./pages/Logout";
import Post from "./pages/Post";
import Projects, { loader as projectsLoader } from "./pages/Projects";
import Project, { loader as projectLoader } from "./pages/Project";

const AppContainer = styled.div`
  width: 100vw;
  height: var(--app-height);
`;

const App = () => {
  const [loading, setLoading] = useState(null); //true
  const [error, setError] = useState(false); //null
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [draft, setDraft] = useState(null);

  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight); //isLight

  /* Automatically ajust app height based on device */
  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", setAppHeight);
    setAppHeight();
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);
  /* Automatically ajust app height based on device */

  /* Toggle favicon based on theme */
  const initialFavicon32 = isLight
    ? "./src/assets/images/favicon/light/favicon-32x32.png"
    : "./src/assets/images/favicon/dark/favicon-32x32.png";
  const [faviconHref32, setFaviconHref32] = useState(initialFavicon32);

  useEffect(() => {
    const favicon32 = document.getElementById("favicon32");
    favicon32.href = faviconHref32;
    const updatedFavicon32 = theme
      ? "./src/assets/images/favicon/light/favicon-32x32.png"
      : "./src/assets/images/favicon/dark/favicon-32x32.png";
    setFaviconHref32(updatedFavicon32);
  }, [theme, faviconHref32]);
  /* Toggle favicon based on theme */

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
        <Route path="*" element={<Error theme={theme} />} />
        <Route index element={<Home theme={theme} />} />
        <Route path="about" element={<About theme={theme} />} />
        <Route
          path="projects"
          element={<Projects theme={theme} />}
          loader={projectsLoader}
        />
        <Route
          path="projects/:title"
          element={<Project theme={theme} />}
          loader={projectLoader}
        />
        <Route
          path="blogs"
          element={<Blogs theme={theme} setDraft={setDraft} />}
          loader={blogsLoader}
        />
        <Route
          path="blogs/:title"
          element={<Blog theme={theme} setBlogToEdit={setBlogToEdit} />}
          loader={blogLoader}
        />
        <Route
          path="login"
          element={<Login theme={theme} />}
          action={loginAction}
        />
        <Route element={<AuthRequired />}>
          <Route
            path="editor"
            element={
              <Editor
                theme={theme}
                blogToEdit={blogToEdit}
                setBlogToEdit={setBlogToEdit}
                draft={draft}
                setDraft={setDraft}
              />
            }
          />
          <Route path="post" element={<Post theme={theme} draft={draft} />} />
          <Route path="logout" element={<Logout theme={theme} />} />
        </Route>
        <Route path="contact" element={<Contact theme={theme} />} />
      </Route>
    )
  );

  if (loading) return <Loading theme={theme} setLoading={setLoading} />;

  if (error) return <ErrorPage theme={theme} />;

  return (
    <>
      <GlobalStyles $theme={theme} />
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </>
  );
};

export default App;
