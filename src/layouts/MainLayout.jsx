/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Scroll from "../components/Scroll";

const LayoutContainer = styled.div`
  width: 100vw;
  height: var(--app-height);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MainLayout = ({ setTheme }) => {
  return (
    <LayoutContainer>
      <Header setTheme={setTheme} />
      <main>
        <Outlet />
        <Scroll />
      </main>
      <Footer />
    </LayoutContainer>
  );
};

export default MainLayout;
