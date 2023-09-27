/* eslint-disable react/prop-types */
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import CursorLight from "../assets/images/cursor/coffin-black-30x30.png";
import CursorDark from "../assets/images/cursor/coffin-white-30x30.png";

const MenuContainer = styled.div`
  display: ${({ $menu }) => ($menu ? "block" : "none")};
  width: 100%;
  height: 100%;
  background-color: ${({ $theme }) =>
    $theme ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.8)"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  @media (min-width: 1000px) {
    display: ${({ $menu }) => ($menu ? "block" : "block")};
    height: auto;
    background-color: transparent;
    position: relative;
    top: -2.2rem;
    margin-bottom: -1.5rem;
  }
  @media (min-width: 1350px) {
  }
`;
const StyledNav = styled.nav`
  width: 80vw;
  height: 50vh;
  border-radius: 1rem;
  background-color: ${({ $theme }) =>
    $theme ? "var(--light-background)" : "var(--dark-background)"};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 800px) {
    width: 70vw;
    height: 60vh;
  }
  @media (min-width: 1000px) {
    width: 100%;
    height: auto;
    background-color: transparent;
    position: static;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`;
const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    gap: 2.5rem;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;
const StyledListItem = styled.li`
  list-style: none;
  font-family: "Black Ops One", cursive;
  font-size: 1.5rem;
  @media (min-width: 1000px) {
    font-size: 1.3rem;
  }
`;
const MenuBorder = styled(StyledListItem)`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  @media (min-width: 800px) {
    margin: 5rem;
    font-size: 2.2rem;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;
const MenuBorderVertical = styled(MenuBorder)`
  position: absolute;
  left: -2%;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  font-size: 1.6rem;
  @media (min-width: 800px) {
    left: -12%;
    font-size: 2.3rem;
  }
`;
const MenuBorderVerticalRight = styled(MenuBorderVertical)`
  left: 85%;
  @media (min-width: 800px) {
    left: 76%;
  }
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${({ $theme }) =>
      $theme ? "var(--light-secondary)" : "var(--dark-secondary)"};
  }
  cursor: ${({ $theme }) =>
    $theme ? `url(${CursorLight}), pointer` : `url(${CursorDark}), pointer`};
`;

const Menu = ({ theme, menu, toggleMenu }) => {
  const activeStyle = {
    textDecoration: "wavy underline",
    textUnderlineOffset: "7px",
  };
  return (
    <MenuContainer $menu={menu} $theme={theme}>
      <StyledNav $theme={theme}>
        <StyledList>
          <MenuBorder>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜</MenuBorder>
          <StyledListItem>
            <StyledLink
              $theme={theme}
              to="/"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Home
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              $theme={theme}
              to="/about"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              About Me
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              $theme={theme}
              to="/projects"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Projects
            </StyledLink>
          </StyledListItem>
          <MenuBorderVertical>⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣</MenuBorderVertical>
          <MenuBorderVerticalRight>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢</MenuBorderVerticalRight>
          <StyledListItem>
            <StyledLink
              $theme={theme}
              to="/blog"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Blog
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              $theme={theme}
              to="/contact"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Contact
            </StyledLink>
          </StyledListItem>
          <MenuBorder>‌⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝</MenuBorder>
        </StyledList>
      </StyledNav>
    </MenuContainer>
  );
};

export default Menu;
