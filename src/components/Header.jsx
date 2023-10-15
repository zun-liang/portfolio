/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

import {
  CursorPointerSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
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
  color: ${PrimaryColorSwitch};
  text-shadow: -2px -2px ${SecondaryColorSwitch};
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
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Time = styled.p`
  text-align: right;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  color: ${TertiarySecondary};
  @media (min-width: 800px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
  @media (min-width: 1000px) {
    font-size: 1rem;
  }
`;
const Weather = styled.p`
  color: ${TertiarySecondary};
  & > span {
    font-size: 0.8rem;
  }
`;
const ThemeSwitch = styled.pre`
  transform: scale(0.8);
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
    hourCycle: "h23",
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

  const [lat, setLat] = useState("");
  const [log, setLog] = useState("");
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const celsius = parseInt(temp - 273.15);
  const fahrenheit = parseInt(((temp - 273.15) * 9) / 5 + 32);
  const [fetchError, setFetchhError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLog(pos.coords.longitude);
    });
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=49fd57e86d1e7e545f5c08f4b28d7dd7`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.weather[0].main);
        setTemp(data.main.temp);
      })
      .catch(() => {
        setFetchhError(true);
      });
    //have no idea why it is 400 bad request all the time
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
      <StyledDiv>
        <Time $theme={theme}>{current}</Time>
        {fetchError ? null : (
          <Weather $theme={theme}>
            : {weather} {celsius}
            <span>°C</span> / {fahrenheit}
            <span>°F</span>
          </Weather>
        )}
      </StyledDiv>
      <ThemeSwitch onClick={updateTheme} $theme={theme}>
        {theme ? "✩·͙*̩̩͙˚̩̥̩̥*̩̩͙✩·͙˚̩̥̩̥." : "⁺☁️☼₊☁️⁺₊"}
      </ThemeSwitch>
    </StyledHeader>
  );
};

export default Header;
//it was showing "24:xx" instead of "00:xx"
//should be fixed by hourCycle, have to see tomorrow
//different browsers display emojis differently, pre better?
