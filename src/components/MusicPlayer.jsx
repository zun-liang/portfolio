import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import MusicBox from "../assets/sounds/music-box.mp3";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";

const PlayButton = styled(FontAwesomeIcon)`
  font-size: 1rem;
  cursor: ${PointerSwitch};
  color: ${TertiaryDot};
  &:hover {
    color: ${PrimarySecondary};
  }
  @media (min-width: 350px) {
    font-size: 1.1rem;
  }
`;
const OffButton = styled(PlayButton)`
  animation: rotateAnimation 8s linear infinite;
  @keyframes rotateAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const MusicPlayer = () => {
  const [play, setPlay] = useState(false);
  const music = document.getElementById("music");

  const handleOn = () => {
    setPlay(true);
    music.play();
    music.loop = true;
  };

  const handleOff = () => {
    setPlay(false);
    music.pause();
    music.loop = false;
  };

  return (
    <>
      <audio id="music">
        <source src={MusicBox} type="audio/mpeg" />
      </audio>
      {play && <OffButton icon={faMusic} onClick={handleOff} />}
      {!play && <PlayButton icon={faMusic} onClick={handleOn} />}
    </>
  );
};

export default MusicPlayer;
