import {
  faTemperatureLow,
  faUmbrella,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import useSound from "use-sound";

import Off from "..//assets/sounds/off.mp3";
import On from "..//assets/sounds/on.mp3";
import { ReactComponent as ModeDark } from "../assets/images/mode-dark.svg";
import { ReactComponent as ModeLight } from "../assets/images/mode-light.svg";
import Key from "../assets/sounds/key.mp3";
import {
  AutoSwitch,
  PointerSwitch,
  PrimarySecondary,
  PrimarySwitch,
  SecondaryPrimary,
  SecondarySwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { ModeContext } from "../contexts/ModeContext";
import { SoundContext } from "../contexts/SoundContext";
import Menu from "./Menu";
import MusicPlayer from "./MusicPlayer";
import SoundSwitch from "./SoundSwitch";
import Time from "./Time";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1.2rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (min-width: 320px) {
    padding: 1.5rem 1.8rem;
  }
  @media (min-width: 750px) {
    padding: 1.5rem 2.5rem 0;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem 0;
  }
  @media (min-width: 1350px) {
    padding: 2rem 4rem 0;
  }
`;
const Wrapper = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2.5rem;
  margin-bottom: -4rem;
  @media (min-width: 375px) {
    gap: 0.7rem;
  }
  @media (min-width: 400px) {
    margin-top: 0.4rem;
    margin-bottom: -1.8rem;
  }
  @media (min-width: 750px) {
    gap: 1.5rem;
  }
  @media screen and (orientation: landscape) {
    display: none;
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
    font-size: 2rem;
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
    color: ${PrimarySecondary};
    text-shadow: 1px 1px ${SecondaryPrimary};
    margin-left: 2px;
    @media (min-width: 750px) {
      font-size: 1.3rem;
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
  @media (min-width: 750px) {
    cursor: ${AutoSwitch};
    font-size: 1.7rem;
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
  margin: 0.4rem 0;
  @media (min-width: 750px) {
    gap: 7px;
    margin: 0.7rem 0;
  }
  @media (min-width: 1024px) {
    gap: 9px;
  }
`;
const Weather = styled.p`
  display: flex;
  align-items: center;
  color: ${TertiarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  font-size: 0.8rem;
  @media (min-width: 750px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 0.8rem;
  color: ${TertiarySecondary};
  @media (min-width: 750px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;
const ModeSwitch = styled.div`
  cursor: ${PointerSwitch};
`;
const StyledModeLight = styled(ModeLight)`
  width: 5rem;
  height: 3.2rem;
  filter: drop-shadow(1px 1px var(--light-background));
  @media (min-width: 375px) {
    width: 6rem;
    height: 3.5rem;
  }
  @media (min-width: 600px) {
    width: 7rem;
  }
`;
const StyledModeDark = styled(ModeDark)`
  width: 5rem;
  height: 2.2rem;
  filter: drop-shadow(1px 1px var(--dark-primary));
  & > g {
    fill: var(--dark-secondary);
  }
  @media (min-width: 375px) {
    width: 6rem;
    height: 2.5rem;
  }
  @media (min-width: 600px) {
    width: 7rem;
  }
`;

const Header = ({ screenWidth }) => {
  const { mode, setMode } = useContext(ModeContext);
  const { sound } = useContext(SoundContext);
  const [menu, setMenu] = useState(false);
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const celsius = parseInt(temp - 273.15);
  const fahrenheit = parseInt(((temp - 273.15) * 9) / 5 + 32);
  const [fetchError, setFetchError] = useState(true);
  const [playOn] = useSound(On, { soundEnabled: sound });
  const [playOff] = useSound(Off, { soundEnabled: sound });
  const [playKey] = useSound(Key, { soundEnabled: sound });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const log = pos.coords.longitude;
      fetch(
        // eslint-disable-next-line no-undef
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${process.env.REACT_APP_WEATHER_APP_ID}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFetchError(false);
          setWeather(data.weather[0].main);
          setTemp(data.main.temp);
        })
        .catch(() => {
          setFetchError(true);
        });
    });
  }, []);

  const updateMode = () => {
    if (mode) {
      playOff();
      setMode(false);
    } else {
      playOn();
      setMode(true);
    }
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
    playKey();
  };

  return (
    <StyledHeader>
      {screenWidth < 1024 && (
        <Wrapper>
          <SoundSwitch />
          <MusicPlayer />
        </Wrapper>
      )}
      <TitleContainer>
        <Title>ZUN L. DEV</Title>
        <SubTitleBlink> ⊹</SubTitleBlink>
        <SubTitleBlinkSlow>˚</SubTitleBlinkSlow>
        <SubTitleBlink>₊</SubTitleBlink>
        <SubTitleBlinkSlow>⊹</SubTitleBlinkSlow>
        <SubTitle aria-label="menu" onClick={toggleMenu}>
          ʚ☕️੭<span>menu</span>
        </SubTitle>
      </TitleContainer>
      <Menu menu={menu} setMenu={setMenu} playKey={playKey} />
      <StyledDiv>
        {fetchError ? (
          <Weather>
            <StyledFontAwesomeIcon icon={faUmbrella} aria-label="weather" />
            &nbsp;&nbsp;n/a&nbsp;&nbsp;
            <StyledFontAwesomeIcon
              icon={faTemperatureLow}
              aria-label="temperature"
            />
            &nbsp;n/a&nbsp;
          </Weather>
        ) : (
          <Weather>
            {weather} {celsius}
            °C/{fahrenheit}
            °F,
          </Weather>
        )}
        <Time />
      </StyledDiv>
      <ModeSwitch onClick={updateMode} aria-label="switch mode">
        {mode ? <StyledModeLight /> : <StyledModeDark />}
      </ModeSwitch>
    </StyledHeader>
  );
};

export default Header;
