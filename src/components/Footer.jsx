/* eslint-disable react/prop-types */
import {
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";

import { ReactComponent as FEM } from "../assets/images/brands/frontend-mentor.svg";
import { ReactComponent as Leetcode } from "../assets/images/brands/leetcode.svg";
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
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) {
    padding: 1.5rem;
  }
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
  gap: 1.1rem;
  @media (min-width: 750px) {
    gap: 1.6rem;
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
  @media (min-width: 750px) {
    width: 1.7rem;
    height: 1.7rem;
  }
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
const LeetcodeIcon = styled(Leetcode)`
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(0.9);
  fill: ${PrimarySwitch};
  cursor: ${PointerSwitch};
`;
const StyledP = styled.p`
  margin-top: 0.8rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 0.8rem;
  color: ${TertiarySecondary};
  @media (min-width: 750px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  const playPick = useContext(PlayPickContext);

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
            aria-label="freeCodeCamp"
            href="https://www.freecodecamp.org/zun-liang"
            onClick={playPick}
          >
            <Icon icon={faFreeCodeCamp} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            aria-label="Frontend Mentor"
            href="https://www.frontendmentor.io/profile/zun-liang"
            onClick={playPick}
          >
            <FEMIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            aria-label="Leetcode"
            href="https://leetcode.com/u/zun-liang/"
            onClick={playPick}
          >
            <LeetcodeIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            aria-label="GitHub"
            href="https://github.com/zun-liang"
            onClick={playPick}
          >
            <Icon icon={faGithub} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/zun-liang/"
            onClick={playPick}
          >
            <Icon icon={faLinkedin} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            href="mailto:contact@zunldev.com"
            onClick={playPick}
            aria-label="send email"
          >
            <Icon icon={faEnvelope} />
          </StyledLink>
        </StyledListItem>
      </StyledList>
      <StyledP>© 2023 Zun Liang. All Rights Reserved.</StyledP>
    </StyledFooter>
  );
};

export default Footer;
