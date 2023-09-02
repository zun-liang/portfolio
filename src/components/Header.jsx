/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  padding: 2rem;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h1`
  font-family: "Black Ops One", cursive;
  font-size: 2rem;
`;
const StyledNav = styled.nav``;
const StyledList = styled.ul`
  display: flex;
  gap: 2rem;
`;
const StyledListItem = styled.li`
  list-style: none;
  font-family: "Black Ops One", cursive;
  font-size: 1.1rem;
`;
const Time = styled.p`
  width: 15rem;
  text-align: center;
  color: var(--focus1);
  font-family: "Lobster", cursive;
  letter-spacing: 2px;
`;
const ThemeSwitch = styled.p`
  color: var(--focus1);
  font-size: 1.5rem;
`;
const Header = ({ theme, setTheme }) => {
  const options = {
    weekday: "short",
    year: "2-digit",
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
  return (
    <StyledHeader>
      <Title>Zun Liang ⊹˚₊⊹˚ʚ☕️੭</Title>
      <StyledNav>
        <StyledList>
          <StyledListItem>Home</StyledListItem>
          <StyledListItem>About Me</StyledListItem>
          <StyledListItem>Projects</StyledListItem>
          <StyledListItem>Blog</StyledListItem>
          <StyledListItem>Contact</StyledListItem>
        </StyledList>
      </StyledNav>
      <Time>{current}</Time>
      <ThemeSwitch onClick={updateTheme}>
        {theme ? "✩·͙*̩̩͙˚̩̥̩̥*̩̩͙✩·͙˚̩̥̩̥." : "⋆⁺₊⋆ ☀︎ ⋆⁺₊⋆"}
      </ThemeSwitch>
    </StyledHeader>
  );
};

export default Header;
