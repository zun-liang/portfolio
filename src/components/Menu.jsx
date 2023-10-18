import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  BackgroundSwitch,
  CursorPointerSwitch,
  PrimaryColorSwitch,
  PrimarySecondary,
  SecondaryPrimary,
} from "../assets/styles/Styles";

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
  width: 300px;
  height: 400px;
  border-radius: 14px;
  background: ${BackgroundSwitch};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 1000px) {
    width: 100%;
    height: auto;
    background: transparent;
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
  gap: 28px;
  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
`;
const StyledListItem = styled.li`
  list-style: none;
  font-family: "Black Ops One", sans-serif;
  font-size: 21px;
  color: ${PrimaryColorSwitch};
  @media (min-width: 1000px) {
    font-size: 1.3rem;
  }
`;
const MenuBorder = styled.li`
  list-style: none;
  margin: 10px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: ${PrimaryColorSwitch};
  @media (min-width: 1000px) {
    display: none;
  }
`;
const MenuBorderVertical = styled(MenuBorder)`
  position: absolute;
  left: -3px;
  writing-mode: vertical-lr;
  text-orientation: sideways;
`;
const MenuBorderVerticalRight = styled(MenuBorderVertical)`
  left: 258px;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimarySecondary};
    text-shadow: 1px 1px ${SecondaryPrimary};
  }
  cursor: ${CursorPointerSwitch};
`;

const Menu = ({ theme, menu, toggleMenu }) => {
  const activeStyle = {
    color: theme ? "var(--light-tertiary)" : "var(--dark-tertiary)",
    textShadow: theme
      ? "1px 1px var(--light-secondary)"
      : "1px 1px transparent",
    textDecoration: "wavy underline",
    textUnderlineOffset: "8px",
  };
  return (
    <MenuContainer $menu={menu} $theme={theme}>
      <StyledNav $theme={theme}>
        <StyledList>
          <MenuBorder $theme={theme}>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜</MenuBorder>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              to="."
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Home
            </StyledLink>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              to="about"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              About Me
            </StyledLink>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              to="projects"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Projects
            </StyledLink>
          </StyledListItem>
          <MenuBorderVertical $theme={theme}>
            ⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣
          </MenuBorderVertical>
          <MenuBorderVerticalRight $theme={theme}>
            ⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢
          </MenuBorderVerticalRight>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              to="blogs"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Blogs
            </StyledLink>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              to="contact"
              onClick={toggleMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Contact
            </StyledLink>
          </StyledListItem>
          <MenuBorder $theme={theme}>‌⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝</MenuBorder>
        </StyledList>
      </StyledNav>
    </MenuContainer>
  );
};

export default Menu;
