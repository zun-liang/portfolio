import { useContext } from "react";
import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  BGSwitch,
  PointerSwitch,
  PrimarySecondary,
  PrimarySwitch,
  SecondaryTransparent,
} from "../assets/styles/Styles";
import { ModeContext } from "../contexts/ModeContext";

const MenuContainer = styled.div`
  display: ${({ $menu }) => ($menu ? "block" : "none")};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) =>
    theme.mode ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.8)"};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  @media (min-width: 1024px) {
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
  background: ${BGSwitch};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 1024px) {
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
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
  }
`;
const StyledListItem = styled.li`
  list-style: none;
  font-family: var(--ff-focus);
  font-size: 21px;
  color: ${PrimarySwitch};
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
const MenuBorder = styled.li`
  list-style: none;
  margin: 10px;
  font-size: 20px;
  font-family: var(--ff-regular);
  font-weight: 900;
  color: ${PrimarySwitch};
  @media (min-width: 1024px) {
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
    text-shadow: 1px 1px ${SecondaryTransparent};
  }
  cursor: ${PointerSwitch};
`;

const Menu = ({ menu, setMenu, playKey }) => {
  const { mode } = useContext(ModeContext);

  const activeStyle = {
    color: mode ? "var(--light-tertiary)" : "var(--dark-primary)",
    textShadow: mode ? "1px 1px var(--light-secondary)" : "1px 1px transparent",
    textDecoration: "wavy underline",
    textUnderlineOffset: "8px",
  };

  const closeMenu = () => {
    setMenu(false);
    playKey();
  };

  return (
    <MenuContainer $menu={menu}>
      <StyledNav>
        <StyledList>
          <MenuBorder>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜</MenuBorder>
          <StyledListItem>
            <StyledLink
              to="."
              aria-label="home"
              onClick={closeMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Home
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to="about"
              aria-label="about me"
              onClick={closeMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              About Me
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to="projects"
              aria-label="projects"
              onClick={closeMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Projects
            </StyledLink>
          </StyledListItem>
          <MenuBorderVertical>⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣</MenuBorderVertical>
          <MenuBorderVerticalRight>
            ⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢
          </MenuBorderVerticalRight>
          <StyledListItem>
            <StyledLink
              to="blogs"
              aria-label="blogs"
              onClick={closeMenu}
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Blogs
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              to="contact"
              aria-label="contact"
              onClick={closeMenu}
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
