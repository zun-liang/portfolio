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
const MainLayout = ({ theme, setTheme, sound, playPick }) => {
  return (
    <LayoutContainer>
      <Header theme={theme} setTheme={setTheme} sound={sound} />
      <main>
        <Outlet />
        <Scroll theme={theme} sound={sound} />
      </main>
      <Footer theme={theme} sound={sound} playPick={playPick} />
    </LayoutContainer>
  );
};

export default MainLayout;
