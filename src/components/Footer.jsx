/* eslint-disable react/prop-types */
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as FEM } from "../assets/images/frontend-mentor.svg";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.5rem;
`;
const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const StyledListItem = styled.li`
  list-style: none;
`;
const StyledLink = styled.a``;
const StyledLinkEn = styled(Link)``;
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ $theme }) =>
    $theme ? "var(--light-primary)" : "var(--dark-primary)"};
`;
const FEMIcon = styled(FEM)`
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(0.8);
  & > path {
    fill: ${({ $theme }) =>
      $theme ? "var(--light-primary)" : "var(--dark-primary)"};
  }
`;
const StyledP = styled.p`
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-top: 0.8rem;
`;

const Footer = ({ theme }) => {
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
          <StyledLink target="_blank" href="">
            <Icon icon={faLinkedin} $theme={theme} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLinkEn to="/contact">
            <Icon icon={faEnvelope} $theme={theme} />
          </StyledLinkEn>
        </StyledListItem>
      </StyledList>
      <StyledP>© {Year} Zun Liang. All Rights Reserved.</StyledP>
    </StyledFooter>
  );
};

export default Footer;
