/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  padding: 2rem 3rem 0;
  position: sticky;
  display: grid;
  grid-template-columns: 3fr 4fr 1fr 1fr;
  align-items: center;
`;
const Title = styled.h1`
  font-family: "Black Ops One", cursive;
  font-size: 2rem;
`;
const StyledNav = styled.nav`
  justify-self: start;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 2rem;
`;
const StyledListItem = styled.li`
  list-style: none;
  font-family: "Black Ops One", cursive;
  font-size: 1.2rem;
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
  return (
    <StyledHeader>
      <Title>Zun Liang ⊹˚₊⊹˚ʚ☕️੭</Title>
      <StyledNav>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/">Home</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/about">About Me</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/projects">Projects</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/blog">Blog</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/contact">Contact</StyledLink>
          </StyledListItem>
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
