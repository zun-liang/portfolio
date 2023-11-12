/* eslint-disable react/prop-types */
import { faFreeCodeCamp, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";

import { ReactComponent as FEM } from "../assets/images/brands/frontend-mentor.svg";
import {
  PointerSwitch,
  PrimarySwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import MusicPlayer from "./MusicPlayer";
import SoundSwitch from "./SoundSwitch";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    padding: 1.5rem 1.5rem 1.8rem;
  }
  @media (min-width: 1024px) {
    padding: 1.5rem 2.5rem 1.8rem;
  }
  @media (min-width: 1350px) {
    padding: 1.5rem 4rem 1.8rem;
  }
`;
const Wrapper = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin: 3.2rem 0 -3.2rem;
  }
`;
const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 750px) {
    gap: 2rem;
  }
`;
const StyledListItem = styled.li`
  list-style: none;
`;
const StyledLink = styled.a`
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimarySwitch};
  }
`;
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${PrimarySwitch};
  cursor: ${PointerSwitch};
`;
const FEMIcon = styled(FEM)`
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(0.8);
  & > path {
    fill: ${PrimarySwitch};
  }
  cursor: ${PointerSwitch};
`;
const StyledP = styled.p`
  margin-top: 0.8rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 0.8rem;
  color: ${TertiarySecondary};
`;

const Footer = () => {
  const playPick = useContext(PlayPickContext);
  const Year = new Date().getFullYear();

  return (
    <StyledFooter>
      <Wrapper>
        <SoundSwitch />
        <MusicPlayer />
        <LoginButton />
        <LogoutButton />
      </Wrapper>
      <StyledList>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.freecodecamp.org/zun-liang"
            onClick={playPick}
          >
            <Icon icon={faFreeCodeCamp} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.frontendmentor.io/profile/zun-liang"
            onClick={playPick}
          >
            <FEMIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://github.com/zun-liang"
            onClick={playPick}
          >
            <Icon icon={faGithub} />
          </StyledLink>
        </StyledListItem>
        {/*<StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.linkedin.com"
            onClick={playPick}
          >
            <Icon icon={faLinkedin} />
          </StyledLink>
        </StyledListItem> */}
        <StyledListItem>
          <StyledLink href="mailto:contact@zunldev.com" onClick={playPick}>
            <Icon icon={faEnvelope} />
          </StyledLink>
        </StyledListItem>
      </StyledList>
      <StyledP>
        © {Year > 2023 ? `2023 - ${Year}` : "2023"} Zun Liang. All Rights
        Reserved.
      </StyledP>
    </StyledFooter>
  );
};

export default Footer;
