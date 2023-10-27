import { useContext, useEffect } from "react";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import CoffeeNight from "../assets/images/face_night.png";

import {
  BasicLink,
  HoverSwitch,
  ParagraphSwitch,
  SecondaryTertiary,
} from "../assets/styles/Styles";
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
  color: ${ParagraphSwitch};
  text-shadow: 1px 1px ${SecondaryTertiary};
`;
const StyledLink = styled(BasicLink)`
  padding: 0.5rem;
  border: 2px dashed ${ParagraphSwitch};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${ParagraphSwitch};
  }
  &:hover,
  &:active {
    color: ${ParagraphSwitch};
    background-color: ${HoverSwitch};
  }
`;

const Logout = () => {
  const playPick = useContext(PlayPickContext);

  useEffect(() => {
    document.title = "Log Out ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <LogoutContainer>
      <StyledImg src={CoffeeNight} alt="gril drinking coffee at night" />
      <StyledP>You've successfully logged out!</StyledP>
      <StyledLink to="/" onClick={playPick}>
        Go back Home
      </StyledLink>
    </LogoutContainer>
  );
};

export default Logout;
//should only show up after i did action to log out
