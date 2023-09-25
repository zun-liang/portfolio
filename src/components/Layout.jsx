/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";

const LayoutContainer = styled.div`
  width: 100vw;
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Layout = ({ theme, setTheme }) => {
  return (
    <LayoutContainer>
      <Header theme={theme} setTheme={setTheme} />
      <Outlet />
      <Footer theme={theme} />
    </LayoutContainer>
  );
};

export default Layout;
