import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";

import AuthRequired from "./components/AuthRequired";
import Layout from "./components/Layout";
import { auth } from "./firebase";
import GlobalStyles from "./GlobalStyles";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogEditor from "./pages/BlogEditor";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Post from "./pages/Post";
import Projects from "./pages/Project";

const AppContainer = styled.div`
  width: 100vw;
  height: var(--app-height);
`;

const App = () => {
  const [loading, setLoading] = useState(false); //true
  const [error, setError] = useState(null); //null

  const [authToken, setAuthToken] = useState(
    sessionStorage.getItem("Auth Token")
  );
  console.log(authToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("Auth Token", user.accessToken);
        setAuthToken(user.accessToken);
        setEmail("");
        setPassword("");
        navigate("/editor", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.setItem("Auth Token", null);
        setAuthToken(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const Hour = new Date().getHours();
  const isLight = Hour < 18 && Hour >= 6;
  const [theme, setTheme] = useState(isLight); //isLight

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
    ? "./src/assets/images/favicon/light/favicon-32x32.png"
    : "./src/assets/images/favicon/dark/favicon-32x32.png";
  const [faviconHref32, setFaviconHref32] = useState(initialFavicon32);
  useEffect(() => {
    const favicon32 = document.getElementById("favicon32");
    favicon32.href = faviconHref32;
    const updatedFavicon32 = theme
      ? "./src/assets/images/favicon/dark/favicon-32x32.png"
      : "./src/assets/images/favicon/light/favicon-32x32.png";
    setFaviconHref32(updatedFavicon32);
  }, [theme]); //this is also one step slower, currently set the opposite

  if (loading) return <Loading theme={theme} setLoading={setLoading} />;
  if (error) return <ErrorPage theme={theme} />;

  return (
    <>
      <GlobalStyles $theme={theme} />
      <AppContainer>
        <Routes>
          <Route
            path="/"
            element={<Layout theme={theme} setTheme={setTheme} />}
          >
            <Route path="*" element={<Error theme={theme} />} />
            <Route index element={<Home theme={theme} />} />
            <Route path="about" element={<About theme={theme} />} />
            <Route path="projects" element={<Projects theme={theme} />} />
            <Route
              path="blogs"
              element={<Blogs theme={theme} authToken={authToken} />}
            />
            <Route path="blogs/:title" element={<Blog theme={theme} />} />
            <Route
              path="login"
              element={
                <Login
                  theme={theme}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  login={login}
                  logout={logout}
                  authToken={authToken}
                  user={user}
                />
              }
            />
            <Route element={<AuthRequired authToken={authToken} />}>
              <Route
                path="editor"
                element={
                  <BlogEditor theme={theme} logout={logout} user={user} />
                }
              />
              <Route
                path="post"
                element={<Post theme={theme} logout={logout} user={user} />}
              />
              <Route
                path="logout"
                element={<Logout theme={theme} user={user} />}
              />
            </Route>
            <Route path="contact" element={<Contact theme={theme} />} />
          </Route>
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
