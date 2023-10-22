/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

const LayoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MainLayout = ({ theme, setTheme }) => {
  return (
    <LayoutContainer>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Outlet />
        <Scroll theme={theme} />
      </main>
      <Footer theme={theme} />
    </LayoutContainer>
  );
};

export default MainLayout;
