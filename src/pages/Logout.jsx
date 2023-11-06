import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import CoffeeNight from "../assets/images/face_night.png";
import {
  BasicLink,
  HoverSwitch,
  PrimarySecondary,
  PrimarySwitch,
  SecondaryTransparent,
} from "../assets/styles/Styles";
import { LogoutContext } from "../contexts/LogoutContext";
import { PlayPickContext } from "../contexts/PlayPickContext";

const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledImg = styled.img`
  width: 15rem;
`;
const StyledP = styled.p`
  text-align: center;
  font-family: "Black Ops One", sans-serif;
  font-size: 2rem;
  color: ${PrimarySwitch};
  text-shadow: 1px 1px ${SecondaryTransparent};
`;
const StyledLink = styled(BasicLink)`
  padding: 0.5rem;
  border: 2px dashed ${PrimarySecondary};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${PrimarySecondary};
  }
  &:hover,
  &:active {
    background-color: ${HoverSwitch};
  }
`;

const Logout = () => {
  const playPick = useContext(PlayPickContext);
  const { showLogout } = useContext(LogoutContext);

  useEffect(() => {
    document.title = "Log out ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  if (!showLogout) return <Navigate to="/404" replace />;
  return (
    <LogoutContainer>
      <StyledImg src={CoffeeNight} alt="girl drinking coffee at night" />
      <StyledP>You&apos;ve successfully logged out!</StyledP>
      <StyledLink to="/" onClick={playPick}>
        Go back Home
      </StyledLink>
    </LogoutContainer>
  );
};

export default Logout;
