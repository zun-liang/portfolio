/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import LoadingImage from "../assets/images/favicon/dark/apple-touch-icon.png";
import LoadingImageLight from "../assets/images/favicon/light/apple-touch-icon.png";
import {
  BackgroundSwitch,
  BasicButton,
  CursorAutoSwitch,
  OpaqueSwitch,
  PrimaryColorSwitch,
  PrimarySecondary,
} from "../assets/styles/Styles.jsx";
import GlobalStyles from "../GlobalStyles";

const LoadingContainer = styled.div`
  width: 100%;
  height: var(--app-height);
  cursor: ${CursorAutoSwitch};
  background: ${BackgroundSwitch};
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
  border: 1px solid ${PrimaryColorSwitch};
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

const Loading = ({ theme, setLoading, today, playPick }) => {
  const handleClick = () => {
    setTimeout(() => setLoading(false), 1000);
    localStorage.setItem("loading", today);
    playPick();
  };
  return (
    <>
      <GlobalStyles />
      <LoadingContainer $theme={theme}>
        <StyledLoadingImage
          src={theme ? LoadingImageLight : LoadingImage}
          alt="loading image"
        />
        <StyledP $theme={theme}>How are you feeling today?</StyledP>
        <StyledDiv>
          <StyledButton $theme={theme} onClick={handleClick}>
            Happy ♡⸜(˶˃ ᵕ ˂˶)⸝♡
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Sad (っ◞‸◟ c)
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Calm („ᵕᴗᵕ„)
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Surprised ˶✧｡✧˶
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Worried (•᷄- •᷅ ;)
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Scared ૮₍˶Ó﹏Ò ⑅₎ა
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Bored ( ¬⤙¬ )
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Embarrsed (,,&#62;﹏&#60;,,)
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Angry ୧(๑•̀ᗝ•́)૭
          </StyledButton>
          <StyledButton $theme={theme} onClick={handleClick}>
            Confused (｡· v ·｡) ?
          </StyledButton>
        </StyledDiv>
        <PassButton $theme={theme} onClick={handleClick}>
          Pass (-_-,)
        </PassButton>
      </LoadingContainer>
    </>
  );
};

export default Loading;
