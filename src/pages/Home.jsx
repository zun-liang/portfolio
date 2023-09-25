/* eslint-disable react/prop-types */
import styled from "styled-components";

import SpeechBubble from "../assets/images/pixel-speech-bubble.gif";
import Profile from "../assets/images/profile.png";

const HomeContainer = styled.div`
  width: 70%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  @media (min-width: 800px) {
    grid-template-rows: 2fr 2fr 1fr;
  }
`;
const StyledH1 = styled.h1`
  font-family: "Black Ops One", cursive;
  font-size: 5rem;
  text-align: center;
  grid-column: 1 / 3;
`;
const StyledH2 = styled.h2`
  text-align: right;
  font-size: 1.6rem;
  grid-column: 1 / 3;
`;
const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const StyledGif = styled.img`
  width: 6rem;
  align-self: start;
`;

const Home = () => {
  return (
    <HomeContainer>
      <StyledImg src={Profile} alt="profile picture" />
      <StyledGif src={SpeechBubble} alt="speech bubble" />
      <StyledH1>ZUN LIANG,</StyledH1>
      <StyledH2>A self-taught front end developer.</StyledH2>
    </HomeContainer>
  );
};

export default Home;
