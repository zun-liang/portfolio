import { useContext } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import useSound from "use-sound";

import { ReactComponent as EarSlash } from "../assets/images/ear-slash.svg";
import { ReactComponent as Ear } from "../assets/images/ear.svg";
import Interface from "../assets/sounds/interface.mp3";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";
import { SoundContext } from "../contexts/SoundContext";

const Container = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  cursor: ${PointerSwitch};s
`;
const StyledEar = styled(Ear)`
  width: 1.2rem;
  height: 1.2rem;
  fill: ${TertiaryDot};
  &:hover {
    fill: ${PrimarySecondary};
  }
`;
const StyledEarSlash = styled(EarSlash)`
  width: 1.2rem;
  height: 1.2rem;
  fill: ${TertiaryDot};
  &:hover {
    fill: ${PrimarySecondary};
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
        <StyledEarSlash onClick={toggleSound} />
      ) : (
        <StyledEar onClick={toggleSound} />
      )}
    </Container>
  );
};
export default SoundSwitch;
