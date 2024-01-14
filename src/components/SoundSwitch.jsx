import { faVolumeHigh, faVolumeOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import useSound from "use-sound";

import Interface from "../assets/sounds/interface.mp3";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";
import { SoundContext } from "../contexts/SoundContext";

const Container = styled.div`
  width: 1rem;
  height: 1rem;
  @media (min-width: 350px) {
    width: 1.2rem;
    height: 1.2rem;
  }
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  cursor: ${PointerSwitch};
  color: ${TertiaryDot};
  &:hover {
    color: ${PrimarySecondary};
  }
  @media (min-width: 350px) {
    font-size: 1.2rem;
  }
`;

const SoundSwitch = () => {
  const { sound, setSound } = useContext(SoundContext);
  const [playInterface] = useSound(Interface, {
    soundEnabled: !sound,
    volume: 0.5,
  });

  const toggleSound = () => {
    setSound((prev) => !prev);
    playInterface();
  };

  return (
    <Container>
      {sound ? (
        <StyledFontAwesomeIcon
          icon={faVolumeHigh}
          aria-label="volume up"
          onClick={toggleSound}
        />
      ) : (
        <StyledFontAwesomeIcon
          icon={faVolumeOff}
          aria-label="volume down"
          onClick={toggleSound}
        />
      )}
    </Container>
  );
};

export default SoundSwitch;
