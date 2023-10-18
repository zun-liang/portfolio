/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Layout = ({ theme, setTheme, sound, setSound, screenWidth }) => {
  return (
    <LayoutContainer>
      <Header
        theme={theme}
        setTheme={setTheme}
        sound={sound}
        setSound={setSound}
        screenWidth={screenWidth}
      />
      <main>
        <Outlet />
      </main>
      <Footer
        theme={theme}
        sound={sound}
        setSound={setSound}
        screenWidth={screenWidth}
      />
    </LayoutContainer>
  );
};

export default Layout;
