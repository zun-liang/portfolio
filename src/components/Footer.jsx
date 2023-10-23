/* eslint-disable react/prop-types */
import {
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as FEM } from "../assets/images/icons/frontend-mentor.svg";
import {
  PointerSwitch,
  PrimarySwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
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
const StyledLinkEn = styled(Link)``;
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
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://codepen.io/zunl"
            onClick={playPick}
          >
            <Icon icon={faCodepen} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.linkedin.com"
            onClick={playPick}
          >
            <Icon icon={faLinkedin} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLinkEn to="/contact" onClick={playPick}>
            <Icon icon={faEnvelope} />
          </StyledLinkEn>
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
