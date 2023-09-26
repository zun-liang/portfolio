/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: 800px) {
    padding: 2.5rem 2.5rem 0;
  }
  @media (min-width: 1000px) {
    padding: 2rem 3rem 0;
    display: grid;
    grid-template-columns: 2fr 4fr 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-family: "Black Ops One", cursive;
  font-size: 1.5rem;
  margin-right: 0.5rem;
  @media (min-width: 800px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;
const SubTitle = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  > span {
    font-size: 1rem;
    font-family: "Lobster", cursive;
    @media (min-width: 1000px) {
      display: none;
    }
  }
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

const Time = styled.p`
  width: 45%;
  margin: 0.5rem 0;
  color: ${({ $theme }) =>
    $theme ? "var(--light-secondary)" : "var(--dark-secondary)"};
  @media (min-width: 800px) {
    width: 30%;
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  @media (min-width: 1000px) {
    width: 12rem;
    font-size: 1rem;
  }
`;
const ThemeSwitch = styled.p`
  font-size: 1.5rem;
  cursor: pointer;
  @media (min-width: 800px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
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
      <TitleContainer>
        <Title>ZUN LIANG</Title>
        <SubTitleBlink> ⊹</SubTitleBlink>
        <SubTitleBlinkSlow>˚</SubTitleBlinkSlow>
        <SubTitleBlink>₊</SubTitleBlink>
        <SubTitleBlinkSlow>⊹</SubTitleBlinkSlow>
        <SubTitle onClick={toggleMenu}>
          ʚ☕️੭<span>menu</span>
        </SubTitle>
      </TitleContainer>
      <Menu theme={theme} menu={menu} toggleMenu={toggleMenu} />
      <Time $theme={theme}>{current}</Time>
      <ThemeSwitch onClick={updateTheme}>
        {theme ? "✩·͙*̩̩͙˚̩̥̩̥*̩̩͙✩·͙˚̩̥̩̥." : "⋆⁺₊⋆ ☼ ⋆⁺₊⋆"}
      </ThemeSwitch>
    </StyledHeader>
  );
};

export default Header;
