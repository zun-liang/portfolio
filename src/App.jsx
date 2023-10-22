import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import useSound from "use-sound";

import PageTurn from "./assets/sounds/pageturn.mp3";
import Pick from "./assets/sounds/pick.mp3";
import { AuthContextProvider } from "./contexts/AuthContext";
import { SoundContext } from "./contexts/SoundContext";
import GlobalStyles from "./GlobalStyles";
import MainLayout from "./layouts/MainLayout";
import UtilityLayout from "./layouts/UtilityLayout";
import About from "./pages/About";
import AuthRequired from "./pages/AuthRequired";
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
import Project, { loader as projectLoader } from "./pages/Project";
import Projects, { loader as projectsLoader } from "./pages/Projects";

const AppContainer = styled.div`
  width: 100vw;
  height: var(--app-height);
`;

const App = () => {
  const today = new Date().toDateString();
  const loaded = localStorage.getItem("loading") !== today;
  const [loading, setLoading] = useState(loaded);

  const [error, setError] = useState(null); //null

  const [blogToEdit, setBlogToEdit] = useState(null);
  const [draft, setDraft] = useState(null);

  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight);

  const { sound } = useContext(SoundContext);
  const [playPick] = useSound(Pick, { soundEnabled: sound });
  const [playPageTurn] = useSound(PageTurn, { soundEnabled: sound });

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
      <Route
        element={
          <UtilityLayout theme={theme} sound={sound} />
        }
      >
        <Route
          path="/"
          element={
            <MainLayout
              theme={theme}
              setTheme={setTheme}
              sound={sound}
              playPick={playPick}
            />
          }
        >
          <Route path="*" element={<Error theme={theme} />} />
          <Route index element={<Home theme={theme} />} />
          <Route
            path="about"
            element={<About theme={theme} playPick={playPick} />}
          />
          <Route
            path="projects"
            element={
              <Projects
                theme={theme}
                playPick={playPick}
                playPageTurn={playPageTurn}
              />
            }
            loader={projectsLoader}
          />
          <Route
            path="projects/:title"
            element={<Project theme={theme} playPick={playPick} />}
            loader={projectLoader}
          />
          <Route
            path="blogs"
            element={
              <Blogs
                theme={theme}
                setDraft={setDraft}
                playPick={playPick}
                playPageTurn={playPageTurn}
              />
            }
            loader={blogsLoader}
          />
          <Route
            path="blogs/:title"
            element={
              <Blog
                theme={theme}
                playPick={playPick}
                setBlogToEdit={setBlogToEdit}
              />
            }
            loader={blogLoader}
          />
          <Route
            path="login"
            element={<Login theme={theme} playPick={playPick} />}
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
                  playPick={playPick}
                />
              }
            />
            <Route
              path="post"
              element={<Post theme={theme} draft={draft} playPick={playPick} />}
            />
            <Route
              path="logout"
              element={<Logout theme={theme} playPick={playPick} />}
            />
          </Route>
          <Route
            path="contact"
            element={<Contact theme={theme} sound={sound} />}
          />
        </Route>
      </Route>
    )
  );

  if (loading)
    return (
      <Loading
        theme={theme}
        setLoading={setLoading}
        today={today}
        playPick={playPick}
      />
    );

  if (error) return <ErrorPage theme={theme} />;

  return (
    <>
      <GlobalStyles $theme={theme} />
      <AuthContextProvider>
        <AppContainer>
          <RouterProvider router={router} />
        </AppContainer>
      </AuthContextProvider>
    </>
  );
};

export default App;
