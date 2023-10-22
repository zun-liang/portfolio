/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import LogoutButton from "../components/LogoutButton";
import MusicPlayer from "../components/MusicPlayer";
import SoundSwitch from "../components/SoundSwitch";
import UserProfile from "../components/UserProfile";

const LayoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
const SoundWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 1.8rem -3.5rem;
  position: relative;
  z-index: 2;
  @media (min-width: 750px) {
    margin: 2.5rem 2.5rem -4rem;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: -3.3rem 3rem 0;
  }
`;
const UtilityLayout = ({ theme }) => {
  return (
    <LayoutContainer>
      <SoundWrapper>
        <SoundSwitch theme={theme}/>
        <MusicPlayer theme={theme} />
      </SoundWrapper>
      <Outlet />
      <Wrapper>
        <SoundSwitch theme={theme}/>
        <MusicPlayer theme={theme} />
        <LogoutButton theme={theme} />
        <UserProfile theme={theme} />
      </Wrapper>
    </LayoutContainer>
  );
};

export default UtilityLayout;
