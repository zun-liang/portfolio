/* eslint-disable react/prop-types */
import {
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as FEM } from "../assets/images/icons/frontend-mentor.svg";
import {
  BasicButton,
  CursorPointerSwitch,
  PrimaryColorSwitch,
  TertiarySecondary,
  SecondaryPrimary,
} from "../assets/styles/Styles";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const StyledFooter = styled.footer`
  width: 100%;
  padding: 1.5rem;
  @media (min-width: 1000px) {
    padding: 1.5rem 1.5rem 2rem;
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
const StyledButton = styled(BasicButton)`
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  font-size: 0.8rem;
  color: ${TertiarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  &:hover,
  &:active,
  &:focus {
  }
`;

const Footer = ({ theme }) => {
  const authToken = sessionStorage.getItem("Auth Token");
  const Year = new Date().getFullYear();
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/logout");
  };
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
      {authToken ? (
        <StyledButton $theme={theme} onClick={logout}>
          Log out
        </StyledButton>
      ) : null}
    </StyledFooter>
  );
};

export default Footer;
