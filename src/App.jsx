import { useContext, useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import styled from "styled-components";
import useSound from "use-sound";

import PageTurn from "./assets/sounds/pageturn.mp3";
import Swoosh from "./assets/sounds/swoosh.mp3";
import { AuthContextProvider } from "./contexts/AuthContext";
import { LogoutContextProvider } from "./contexts/LogoutContext";
import { ModeContext } from "./contexts/ModeContext";
import { PlayPickContextProvider } from "./contexts/PlayPickContext";
import { SoundContext } from "./contexts/SoundContext";
import GlobalStyles from "./GlobalStyles";
import AuthRequired from "./layouts/AuthRequired";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Blog, { loader as blogLoader } from "./pages/Blog";
import Blogs, { loader as blogsLoader } from "./pages/Blogs";
import Contact from "./pages/Contact";
import Editor from "./pages/Editor";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Login, { action as loginAction } from "./pages/Login";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

const AppContainer = styled.div`
  width: 100vw;
  height: var(--app-height);
`;

const App = () => {
  const today = new Date().toDateString();
  const loaded = localStorage.getItem("loading") !== today;
  const [loading, setLoading] = useState(loaded);

  const [blogToEdit, setBlogToEdit] = useState(null);
  const [tagsToEdit, setTagsToEdit] = useState(null);
  const [draft, setDraft] = useState(null);

  /* === Sound effects setup === */
  const { sound } = useContext(SoundContext);
  const [playPageTurn] = useSound(PageTurn, { soundEnabled: sound });
  const [playSwoosh] = useSound(Swoosh, { soundEnabled: sound });

  /* === Automatically adjust app height depending on screen sizes === */
  const setAppHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", setAppHeight);
    setAppHeight();
    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  /* === Get current screen width when resizing === */
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateScreenWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [screenWidth]);

  /* === Toggle favicon depending on mode === */
  const { mode, isLight } = useContext(ModeContext);
  const initialFaviconHref16 = isLight
    ? "/favicon/light/favicon-16x16.png"
    : "/favicon/dark/favicon-16x16.png";
  const [faviconHref16, setFaviconHref16] = useState(initialFaviconHref16);
  useEffect(() => {
    const favicon16 = document.getElementById("favicon16");
    favicon16.href = faviconHref16;
    const updatedFaviconHref16 = mode
      ? "/favicon/light/favicon-16x16.png"
      : "/favicon/dark/favicon-16x16.png";
    setFaviconHref16(updatedFaviconHref16);
  }, [mode, faviconHref16]);

  const initialFaviconHref32 = isLight
    ? "/favicon/light/favicon-32x32.png"
    : "/favicon/dark/favicon-32x32.png";
  const [faviconHref32, setFaviconHref32] = useState(initialFaviconHref32);
  useEffect(() => {
    const favicon32 = document.getElementById("favicon32");
    favicon32.href = faviconHref32;
    const updatedFaviconHref32 = mode
      ? "/favicon/light/favicon-32x32.png"
      : "/favicon/dark/favicon-32x32.png";

    setFaviconHref32(updatedFaviconHref32);
  }, [mode, faviconHref32]);

  /* === Toggle manifest depending on mode === */
  const initialManifestHref = isLight
    ? "/favicon/light/site.webmanifest"
    : "/favicon/dark/site.webmanifest";
  const [manifestHref, setManifestHref] = useState(initialManifestHref);
  useEffect(() => {
    const manifest = document.getElementById("manifest");
    manifest.href = manifestHref;
    const updatedManifestHref = mode
      ? "/favicon/light/site.webmanifest"
      : "/favicon/dark/site.webmanifest";
    setManifestHref(updatedManifestHref);
  }, [mode, manifestHref]);

  /* === Toggle title color depending on mode === */
  const initialTitleColorContent = isLight ? "#f7f8d4" : "#121212";
  const [titleColorContent, setTitleColorContent] = useState(
    initialTitleColorContent
  );
  useEffect(() => {
    const titleColor = document.getElementById("theme-color");
    titleColor.content = titleColorContent;
    const updatedTitleColorContent = mode ? "#f7f8d4" : "#121212";
    setTitleColorContent(updatedTitleColorContent);
  }, [mode, titleColorContent]);

  /* === Toggle apple touch icon depending on mode === */
  const initialAppleTouchIconHref = isLight
    ? "/favicon/light/apple-touch-icon.png"
    : "/favicon/dark/apple-touch-icon.png";
  const [appleTouchIconHref, setAppleTouchIconHref] = useState(
    initialAppleTouchIconHref
  );
  useEffect(() => {
    const appleTouchIcon = document.getElementById("apple-touch-icon");
    appleTouchIcon.href = appleTouchIconHref;
    const updatedAppleTouchIconHref = mode
      ? "/favicon/light/apple-touch-icon.png"
      : "/favicon/dark/apple-touch-icon.png";
    setAppleTouchIconHref(updatedAppleTouchIconHref);
  }, [mode, appleTouchIconHref]);

  /* === Toggle safari mask icon depending on mode === */
  const initialMaskIconHref = isLight
    ? "/favicon/light/safari-pinned-tab.svg"
    : "/favicon/dark/safari-pinned-tab.svg";
  const [maskIconHref, setMaskIconHref] = useState(initialMaskIconHref);
  useEffect(() => {
    const maskIcon = document.getElementById("mask-icon");
    maskIcon.href = maskIconHref;
    const updatedMaskIconHref = mode
      ? "/favicon/light/safari-pinned-tab.svg"
      : "/favicon/dark/safari-pinned-tab.svg";
    setMaskIconHref(updatedMaskIconHref);
  }, [mode, maskIconHref]);

  /* === Toggle theme color depending on mode === */
  const initialThemeColorContent = isLight ? "#f7f8d4" : "#121212";
  const [themeColorContent, setThemeColorContent] = useState(
    initialThemeColorContent
  );
  useEffect(() => {
    const themeColor = document.getElementById("theme-color");
    themeColor.content = themeColorContent;
    const updatedThemeColorContent = mode ? "#f7f8d4" : "#121212";
    setThemeColorContent(updatedThemeColorContent);
  }, [mode, themeColorContent]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout screenWidth={screenWidth} />}
        errorElement={<Error />}
      >
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="projects"
          element={<Projects playPageTurn={playPageTurn} />}
        />
        <Route path="projects/:title" element={<Project />} />
        <Route
          path="blogs"
          element={
            <Blogs
              playPageTurn={playPageTurn}
              setBlogToEdit={setBlogToEdit}
              setTagsToEdit={setTagsToEdit}
            />
          }
          loader={blogsLoader}
        />
        <Route
          path="blogs/:title"
          element={
            <Blog
              setBlogToEdit={setBlogToEdit}
              setTagsToEdit={setTagsToEdit}
              playSwoosh={playSwoosh}
            />
          }
          loader={blogLoader}
        />
        <Route path="login" element={<Login />} action={loginAction} />
        <Route element={<AuthRequired />}>
          <Route
            path="editor"
            element={
              <Editor
                blogToEdit={blogToEdit}
                setBlogToEdit={setBlogToEdit}
                draft={draft}
                setDraft={setDraft}
                tagsToEdit={tagsToEdit}
                setTagsToEdit={setTagsToEdit}
                playSwoosh={playSwoosh}
              />
            }
          />
        </Route>
        <Route path="logout" element={<Logout />} />
        <Route path="contact" element={<Contact playSwoosh={playSwoosh} />} />
      </Route>
    )
  );

  if (loading)
    return (
      <PlayPickContextProvider>
        <Loading setLoading={setLoading} today={today} />
      </PlayPickContextProvider>
    );

  return (
    <>
      <GlobalStyles />
      <PlayPickContextProvider>
        <AuthContextProvider>
          <LogoutContextProvider>
            <AppContainer>
              <RouterProvider router={router} />
            </AppContainer>
          </LogoutContextProvider>
        </AuthContextProvider>
      </PlayPickContextProvider>
    </>
  );
};

export default App;
