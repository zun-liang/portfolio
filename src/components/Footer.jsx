/* eslint-disable react/prop-types */
import {
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as FEM } from "../assets/images/icons/frontend-mentor.svg";
import {
  CursorPointerSwitch,
  PrimaryColorSwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
import SoundSwitch from "./SoundSwitch";
import LogoutButton from "./LogoutButton";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1000px) {
    padding: 1.5rem 2.5rem 2rem;
  }
  @media (min-width: 1350px) {
    padding: 1.5rem 4rem 2rem;
  }
`;
const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: 800px) {
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
    color: ${PrimaryColorSwitch};
  }
`;
const StyledLinkEn = styled(Link)``;
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${PrimaryColorSwitch};
  cursor: ${CursorPointerSwitch};
`;
const FEMIcon = styled(FEM)`
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(0.8);
  & > path {
    fill: ${PrimaryColorSwitch};
  }
  cursor: ${CursorPointerSwitch};
`;
const StyledP = styled.p`
  margin-top: 0.8rem;
  text-align: center;
  letter-spacing: 1px;
  font-size: 0.8rem;
  color: ${TertiarySecondary};
`;
const Wrapper = styled.div`
  align-self: flex-start;
  display: flex;
  gap: 5px;
  @media (min-width: 1000px) {
    margin-top: -1.3rem;
  }
`;

const Footer = ({ theme, sound, setSound, screenWidth }) => {
  const Year = new Date().getFullYear();

  return (
    <StyledFooter $theme={theme}>
      <StyledList>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.freecodecamp.org/zun-liang"
          >
            <Icon icon={faFreeCodeCamp} $theme={theme} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.frontendmentor.io/profile/zun-liang"
          >
            <FEMIcon $theme={theme} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href="https://github.com/zun-liang">
            <Icon icon={faGithub} $theme={theme} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href="https://codepen.io/zunl">
            <Icon icon={faCodepen} $theme={theme} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href="https://www.linkedin.com">
            <Icon icon={faLinkedin} $theme={theme} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLinkEn to="/contact">
            <Icon icon={faEnvelope} $theme={theme} />
          </StyledLinkEn>
        </StyledListItem>
      </StyledList>
      <StyledP $theme={theme}>
        © {Year > 2023 ? `2023 - ${Year}` : "2023"} Zun Liang. All Rights
        Reserved.
      </StyledP>
      <Wrapper>
        {screenWidth > 999 && (
          <SoundSwitch theme={theme} sound={sound} setSound={setSound} />
        )}
        {screenWidth > 999 && <LogoutButton theme={theme} />}
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
