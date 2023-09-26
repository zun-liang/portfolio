/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: ${({ $theme }) =>
    $theme ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.8)"};
  display: ${({ $menu }) => ($menu ? "block" : "none")};
  @media (min-width: 1000px) {
    width: 100%;
    height: auto;
    position: static;
    z-index: 1;
    display: ${({ $menu }) => ($menu ? "block" : "block")};
    background-color: transparent;
  }
`;
const StyledNav = styled.nav`
  width: 80vw;
  height: 50vh;
  border-radius: 1rem;
  position: absolute;
  background-color: ${({ $theme }) =>
    $theme ? "var(--light-background)" : "var(--dark-background)"};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 800px) {
    width: 70vw;
    height: 60vh;
  }
  @media (min-width: 1000px) {
    position: static;
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    transform: translate(0, 0);
    background-color: transparent;
  }
`;
const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  @media (min-width: 800px) {
    gap: 2.5rem;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
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
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: 700;
  @media (min-width: 800px) {
    font-size: 2.2rem;
    margin: 5rem;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;
const MenuBorderVertical = styled(MenuBorder)`
  writing-mode: vertical-lr;
  text-orientation: sideways;
  position: absolute;
  left: -2%;
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
const StyledLink = styled(Link)`
  text-decoration: none;
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${({ $theme }) =>
      $theme ? "var(--light-secondary)" : "var(--dark-secondary)"};
  }
`;

const Menu = ({ theme, menu, toggleMenu }) => {
  return (
    <MenuContainer $menu={menu} $theme={theme}>
      <StyledNav $theme={theme}>
        <StyledList>
          <MenuBorder>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜</MenuBorder>
          <StyledListItem>
            <StyledLink $theme={theme} to="/" onClick={toggleMenu}>
              Home
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink $theme={theme} to="/about" onClick={toggleMenu}>
              About Me
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink $theme={theme} to="/projects" onClick={toggleMenu}>
              Projects
            </StyledLink>
          </StyledListItem>
          <MenuBorderVertical>⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣</MenuBorderVertical>
          <MenuBorderVerticalRight>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢</MenuBorderVerticalRight>
          <StyledListItem>
            <StyledLink $theme={theme} to="/blog" onClick={toggleMenu}>
              Blog
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink $theme={theme} to="/contact" onClick={toggleMenu}>
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
