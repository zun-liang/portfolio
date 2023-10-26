import { useState } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { ReactComponent as MusicOn } from "../assets/images/music.svg";
import MusicBox from "../assets/sounds/music-box.mp3";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";

const PlayButton = styled(MusicOn)`
  width: 1rem;
  height: 1rem;
  cursor: ${PointerSwitch};
  & > path {
    stroke: ${TertiaryDot};
  }
  &:hover > path {
    stroke: ${PrimarySecondary};
  }
  @media (min-width: 350px) {
    width: 1.2rem;
    height: 1.2rem;
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
      {play && <OffButton onClick={handleOff} />}
      {!play && <PlayButton onClick={handleOn} />}
    </>
  );
};

export default MusicPlayer;
