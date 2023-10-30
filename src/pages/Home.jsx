import { useEffect } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import SpeechBubble from "../assets/images/hey-i-am.gif";
import Profile from "../assets/images/profile.png";
import { SecondarySwitch } from "../assets/styles/Styles.jsx";

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
  @media (min-width: 750px) {
    width: 65%;
    height: 55%;
    grid-template-columns: 7rem 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
  @media (min-width: 1024px) {
    width: 70%;
    top: 50%;
    transform: translate(-50%, -50%);
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media (min-width: 1200px) {
    width: 50%;
    top: 45%;
    transform: translate(-50%, -45%);
    grid-template-rows: 2fr 2fr 1fr;
  }
`;
const StyledH1 = styled.h1`
  grid-column: 1 / 3;
  text-align: center;
  font-family: "Black Ops One", sans-serif;
  font-size: 5rem;
  text-shadow: 5px 5px ${SecondarySwitch};
  @media (min-width: 750px) {
    font-size: 6.5rem;
  }
`;
const StyledH2 = styled.h2`
  grid-column: 1 / 3;
  text-align: right;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => (theme.mode ? "900" : "700")};
  color: ${SecondarySwitch};
  -webkit-text-stroke: ${({ theme }) =>
    theme.mode ? "1px var(--light-tertiary)" : ""};
  text-shadow: ${({ theme }) =>
    theme.mode ? "" : "2px 2px var(--dark-primary)"};
  @media (min-width: 750px) {
    line-height: 1.6;
    font-size: 2.2rem;
  }
`;
const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
  @media (min-width: 750px) {
    width: 7rem;
    height: 7rem;
  }
`;
const StyledGif = styled.img`
  align-self: start;
  width: 6rem;
  @media (min-width: 750px) {
    width: 7rem;
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <HomeContainer>
      <StyledImg src={Profile} alt="profile" />
      <StyledGif src={SpeechBubble} alt="speech bubble" />
      <StyledH1>ZUN LIANG,</StyledH1>
      <StyledH2>A self-taught front end developer.</StyledH2>
    </HomeContainer>
  );
};

export default Home;
