/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  //background-color: white;
  border: 1px solid red;
  //display: grid;
  //grid-template-columns: 1fr;
  //grid-template-rows: 1fr 2fr 1fr 1fr;
  @media (min-width: 800px) {
    padding: 2rem 3rem 0;
    display: grid;
    grid-template-columns: 3fr 4fr 1fr 1fr;
    align-items: center;
    position: fixed;
    top: 0;
  }
`;
const Title = styled.h1`
  font-family: "Black Ops One", cursive;
  font-size: 2rem;
  border: 1px solid blue;
`;

const SubTitle = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  //color: var(--focus3);
  @media (min-width: 800px) {
    cursor: auto;
  }
`;
const SubTitleBlink = styled(SubTitle)`
  animation: blink 3s ease-in infinite;
  @keyframes blink {
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0.5;
    }
  }
`;
const SubTitleBlinkSlow = styled(SubTitleBlink)`
  animation: blink 5s ease-out infinite;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ $menu }) => ($menu ? "block" : "none")};
  @media (min-width: 800px) {
    display: ${({ $menu }) => ($menu ? "block" : "block")};
    background-color: transparent;
  }
`;
const StyledNav = styled.nav`
  width: 70vw;
  height: 40vh;
  border-radius: 0.5rem;
  position: absolute;
  background-color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 800px) {
    width: auto;
    height: auto;
    background-color: transparent;
    justify-self: start;
  }
`;
const StyledList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 2rem;
  }
`;
const StyledListItem = styled.li`
  list-style: none;
  font-family: "Black Ops One", cursive;
  font-size: 1.5rem;
  @media (min-width: 800px) {
    font-size: 1.2rem;
  }
`;
const MenuBorder = styled(StyledListItem)`
  font-size: 1.3rem;
  margin: 1rem;
  @media (min-width: 800px) {
    display: none;
  }
`;
const MenuBorderVertical = styled(MenuBorder)`
  writing-mode: vertical-lr;
  position: absolute;
  left: 0;
`;
const MenuBorderVerticalRight = styled(MenuBorderVertical)`
  left: 82%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  &:link {
    color: var(--focus1);
  }
  &:visited {
    color: var(--focus1);
  }
`;
const Time = styled.p`
  justify-self: end;
  width: 12rem;
  text-align: center;
  color: var(--focus1);
  font-family: "Lobster", cursive;
  letter-spacing: 2px;
`;
const ThemeSwitch = styled.p`
  color: var(--focus1);
  font-size: 1.5rem;
  justify-self: end;
  cursor: pointer;
`;

const Header = ({ theme, setTheme }) => {
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const [current, setCurrent] = useState(
    new Date().toLocaleString("en-US", options)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCurrent = new Date().toLocaleString("en-US", options);
      setCurrent(updatedCurrent);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateTheme = () => setTheme((prev) => !prev);

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu((prev) => !prev);
  return (
    <StyledHeader>
      <Title>
        Zun Liang
        <SubTitleBlink> ⊹</SubTitleBlink>
        <SubTitleBlinkSlow>˚</SubTitleBlinkSlow>
        <SubTitleBlink>₊</SubTitleBlink>
        <SubTitleBlinkSlow>⊹</SubTitleBlinkSlow>
        <SubTitle onClick={toggleMenu}> ʚ☕️੭</SubTitle>
      </Title>
      <Overlay $menu={menu}>
        <StyledNav>
          <StyledList>
            <MenuBorder>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜</MenuBorder>
            <StyledListItem>
              <StyledLink to="/" onClick={toggleMenu}>
                Home
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/about" onClick={toggleMenu}>
                About Me
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/projects" onClick={toggleMenu}>
                Projects
              </StyledLink>
            </StyledListItem>
            <MenuBorderVertical>⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝</MenuBorderVertical>
            <MenuBorderVerticalRight>⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜⊹⌢⊹⏜</MenuBorderVerticalRight>
            <StyledListItem>
              <StyledLink to="/blog" onClick={toggleMenu}>
                Blog
              </StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/contact" onClick={toggleMenu}>
                Contact
              </StyledLink>
            </StyledListItem>
            <MenuBorder>‌⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝⊹⌣⊹⏝</MenuBorder>
          </StyledList>
        </StyledNav>
      </Overlay>
      <Time>{current}</Time>
      <ThemeSwitch onClick={updateTheme}>
        {theme ? "✩·͙*̩̩͙˚̩̥̩̥*̩̩͙✩·͙˚̩̥̩̥." : "⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆"}
      </ThemeSwitch>
    </StyledHeader>
  );
};

export default Header;
