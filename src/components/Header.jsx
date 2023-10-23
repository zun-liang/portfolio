/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";

import Off from "..//assets/sounds/off.mp3";
import On from "..//assets/sounds/on.mp3";
import Key from "../assets/sounds/key.mp3";
import { AutoSwitch, PointerSwitch, PrimarySwitch, SecondaryPrimary, SecondarySwitch, TertiarySecondary } from "../assets/styles/Styles";
import { ModeContext } from "../contexts/ModeContext";
import { SoundContext } from "../contexts/SoundContext";
import Menu from "./Menu";
import Time from "./Time";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: 750px) {
    padding: 2.5rem 2.5rem 0;
  }
  @media (min-width: 1024px) {
    padding: 2.5rem 3rem 0;
  }
  @media (min-width: 1350px) {
    padding: 2.5rem 4rem 0;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  margin-right: 0.5rem;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.5rem;
  color: ${PrimarySwitch};
  text-shadow: -2px -2px ${SecondarySwitch};
  @media (min-width: 750px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
    letter-spacing: 3px;
  }
`;
const SubTitle = styled.span`
  cursor: ${PointerSwitch};
  font-size: 1.5rem;
  color: ${SecondarySwitch};
  text-shadow: 1px 1px ${PrimarySwitch};
  > span {
    font-family: "Lobster", sans-serif;
    font-size: 1rem;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  @media (min-width: 750px) {
    cursor: ${AutoSwitch};
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
  gap: 5px;
  @media (min-width: 750px) {
    gap: 7px;
  }
  @media (min-width: 1024px) {
    gap: 9px;
  }
`;
const Weather = styled.p`
  color: ${TertiarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  font-size: 0.8rem;
  @media (min-width: 750px) {
    font-size: 0.9rem;
  }
`;
const ModeSwitch = styled.p`
  font-size: 1.5rem;
  cursor: ${PointerSwitch};
  text-shadow: 1px 1px ${SecondarySwitch};
`;

//kinda want to use loader here to show weather loading...

const Header = () => {
  const { mode, setMode } = useContext(ModeContext);
  const { sound } = useContext(SoundContext);
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const celsius = parseInt(temp - 273.15);
  const fahrenheit = parseInt(((temp - 273.15) * 9) / 5 + 32);
  const [fetchError, setFetchhError] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const log = pos.coords.longitude;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=49fd57e86d1e7e545f5c08f4b28d7dd7`
      )
        .then((res) => res.json())
        .then((data) => {
          setFetchhError(false);
          setWeather(data.weather[0].main);
          setTemp(data.main.temp);
        })
        .catch(() => {
          setFetchhError(true);
        });
    });
  }, []);

  const [playOn] = useSound(On, { soundEnabled: sound });
  const [playOff] = useSound(Off, { soundEnabled: sound });
  const updateMode = () => {
    if (mode) {
      playOff();
      setMode(false);
    } else {
      playOn();
      setMode(true);
    }
  };

  const [playKey] = useSound(Key, { soundEnabled: sound });
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
    playKey();
  };
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
      <Menu menu={menu} setMenu={setMenu} playKey={playKey} />
      <StyledDiv>
        {fetchError ? (
          <Weather>Wx: Unk, Temp: Unk,</Weather>
        ) : (
          <Weather>
            {weather} {celsius}
            °C/{fahrenheit}
            °F,
          </Weather>
        )}
        <Time />
      </StyledDiv>
      <ModeSwitch onClick={updateMode}>
        {mode ? "✩·͙*̩̩͙˚̩̥̩̥*̩̩͙✩·͙˚̩̥̩̥." : "⁺☁️☼₊☁️⁺₊"}
      </ModeSwitch>
    </StyledHeader>
  );
};

export default Header;
