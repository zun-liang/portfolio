import { useContext } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import LoadingImage from "../assets/images/logo-dark.png";
import LoadingImageLight from "../assets/images/logo-light.png";
import {
  AutoSwitch,
  BasicButton,
  BGSwitch,
  OpaqueSwitch,
  PrimarySecondary,
  PrimarySwitch,
} from "../assets/styles/Styles.jsx";
import { ModeContext } from "../contexts/ModeContext";
import { PlayPickContext } from "../contexts/PlayPickContext";
import GlobalStyles from "../GlobalStyles";

const LoadingContainer = styled.div`
  width: 100%;
  height: var(--app-height);
  cursor: ${AutoSwitch};
  background: ${BGSwitch};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledLoadingImage = styled.img`
  width: 5rem;
  animation: rotateAnimation 4s linear infinite;
  @keyframes rotateAnimation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  @media (min-width: 1024px) {
    width: 8rem;
  }
`;
const StyledP = styled.p`
  font-family: "Black Ops One", sans-serif;
  font-size: 1.5rem;
  color: ${PrimarySecondary};
`;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 750px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
`;
const StyledButton = styled(BasicButton)`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid ${PrimarySwitch};
  &:hover,
  &:active,
  &:focus {
    background-color: ${OpaqueSwitch};
  }
`;
const PassButton = styled(StyledButton)`
  border: 1px solid ${PrimarySecondary};
  color: ${PrimarySecondary};
  font-size: 1.5rem;
  &:hover,
  &:active,
  &:focus {
    background-color: ${OpaqueSwitch};
  }
`;

const Loading = ({ setLoading, today }) => {
  const { mode } = useContext(ModeContext);
  const playPick = useContext(PlayPickContext);

  const handleClick = () => {
    setTimeout(() => setLoading(false), 1000);
    localStorage.setItem("loading", today);
    playPick();
  };

  return (
    <>
      <GlobalStyles />
      <LoadingContainer>
        <StyledLoadingImage
          src={mode ? LoadingImageLight : LoadingImage}
          alt="loading image"
        />
        <StyledP>How are you feeling today?</StyledP>
        <StyledDiv>
          <StyledButton onClick={handleClick}>Happy ♡⸜(˶˃ ᵕ ˂˶)⸝♡</StyledButton>
          <StyledButton onClick={handleClick}>Sad (っ◞‸◟ c)</StyledButton>
          <StyledButton onClick={handleClick}>Calm („ᵕᴗᵕ„)</StyledButton>
          <StyledButton onClick={handleClick}>Surprised ˶✧｡✧˶</StyledButton>
          <StyledButton onClick={handleClick}>Worried (•᷄- •᷅ ;)</StyledButton>
          <StyledButton onClick={handleClick}>Scared ૮₍˶Ó﹏Ò ⑅₎ა</StyledButton>
          <StyledButton onClick={handleClick}>Bored ( ¬⤙¬ )</StyledButton>
          <StyledButton onClick={handleClick}>
            Embarrassed (,,&#62;﹏&#60;,,)
          </StyledButton>
          <StyledButton onClick={handleClick}>Angry ୧(๑•̀ᗝ•́)૭</StyledButton>
          <StyledButton onClick={handleClick}>
            Confused (｡· v ·｡) ?
          </StyledButton>
        </StyledDiv>
        <PassButton onClick={handleClick}>Pass (-_-,)</PassButton>
      </LoadingContainer>
    </>
  );
};

export default Loading;
