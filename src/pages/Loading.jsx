/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import LoadingImage from "../../public/favicon/dark/apple-touch-icon.png";
import LoadingImageLight from "../../public/favicon/light/apple-touch-icon.png";
import GlobalStyles from "../GlobalStyles";
import {
  BackgroundColorSwitch,
  CursorPointerSwitch,
  PrimaryColorSwitch,
} from "../assets/styles/Styles.jsx";

const LoadingContainer = styled.div`
  width: 100%;
  height: var(--app-height);
  background: ${BackgroundColorSwitch};
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
  @media (min-width: 1000px) {
    width: 8rem;
  }
`;
const StyledP = styled.p`
  font-family: "Black Ops One", sans-serif;
  font-size: 1.5rem;
  color: ${PrimaryColorSwitch};
`;
const StyledDiv = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const StyledButton = styled.button`
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 2px dashed
    ${({ $theme }) => ($theme ? "black" : "var(--dark-secondary)")};
  cursor: ${CursorPointerSwitch};
  color: ${({ $theme }) => ($theme ? "black" : "var(--dark-secondary)")};
  background-color: ${BackgroundColorSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  &:hover,
  &:active,
  &:focus {
    background-color: ${({ $theme }) =>
      $theme ? "var(--light-background)" : "var(--dark-primary)"};
  }
`;
const PassButton = styled(StyledButton)`
  border: 2px dashed ${PrimaryColorSwitch};
  color: ${PrimaryColorSwitch};
  font-size: 1.5rem;
  &:hover,
  &:active,
  &:focus {
    background-color: ${({ $theme }) =>
      $theme ? "var(--light-background)" : "var(--dark-secondary)"};
  }
`;

const Loading = ({ theme, setLoading }) => {
  const handleClick = () => {
    setTimeout(() => setLoading(false), 1000);
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
