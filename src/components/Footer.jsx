import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as FEM } from "../assets/images/frontend-mentor.svg";

const StyledFooter = styled.footer`
  width: 100vw;
  padding: 2rem;
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
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--focus1);
`;
const FEMIcon = styled(FEM)`
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(0.8);
  & > path {
    fill: var(--focus1);
  }
`;
const StyledP = styled.p`
  text-align: center;
  color: var(--focus1);
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-top: 1rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledList>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.freecodecamp.org/zun-liang"
          >
            <Icon icon={faFreeCodeCamp} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.frontendmentor.io/profile/zun-liang"
          >
            <FEMIcon />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href="https://github.com/zun-liang">
            <Icon icon={faGithub} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href="https://codepen.io/zunl">
            <Icon icon={faCodepen} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href="">
            <Icon icon={faLinkedin} />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink target="_blank" href="">
            <Icon icon={faEnvelope} />
          </StyledLink>
        </StyledListItem>
      </StyledList>
      <StyledP>© 2023 Zun Liang. All Rights Reserved.</StyledP>
    </StyledFooter>
  );
};

export default Footer;
