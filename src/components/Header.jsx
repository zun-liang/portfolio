/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import {
  CursorPointerSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: 800px) {
    padding: 2.5rem 2.5rem 0;
  }
  @media (min-width: 1350px) {
    padding: 2.5rem 4rem 0;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  margin-right: 0.5rem;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.5rem;
  text-shadow: 2px 2px ${SecondaryColorSwitch};
  @media (min-width: 800px) {
    letter-spacing: 2px;
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.8rem;
  }
`;
const SubTitle = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${SecondaryColorSwitch};
  text-shadow: 1px 1px ${PrimaryColorSwitch};
  > span {
    font-family: "Lobster", sans-serif;
    font-size: 1rem;
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
  text-align: right;
  margin: 0.5rem 0;
  color: ${SecondaryColorSwitch};
  text-shadow: 1px 1px ${PrimaryColorSwitch};
  @media (min-width: 800px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;
const ThemeSwitch = styled.p`
  font-size: 1.5rem;
  cursor: ${CursorPointerSwitch};
  text-shadow: 1px 1px ${SecondaryColorSwitch};
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
        <Title $theme={theme}>ZUN LIANG</Title>
        <SubTitleBlink $theme={theme}> ⊹</SubTitleBlink>
        <SubTitleBlinkSlow $theme={theme}>˚</SubTitleBlinkSlow>
        <SubTitleBlink $theme={theme}>₊</SubTitleBlink>
        <SubTitleBlinkSlow $theme={theme}>⊹</SubTitleBlinkSlow>
        <SubTitle $theme={theme} onClick={toggleMenu}>
          ʚ☕️੭<span>menu</span>
        </SubTitle>
      </TitleContainer>
      <Menu theme={theme} menu={menu} toggleMenu={toggleMenu} />
      <Time $theme={theme}>{current}</Time>
      <ThemeSwitch onClick={updateTheme} $theme={theme}>
        {theme ? "✩·͙*̩̩͙˚̩̥̩̥*̩̩͙✩·͙˚̩̥̩̥." : "⋆⁺₊⋆ ☼ ⋆⁺₊⋆"}
      </ThemeSwitch>
    </StyledHeader>
  );
};

export default Header;
