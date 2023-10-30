import { useContext } from "react";
import styled from "styled-components";

import Logo from "../assets/images/favicon/dark/apple-touch-icon.png";
import LogoLight from "../assets/images/favicon/light/apple-touch-icon.png";
import {
  PointerSwitch,
  SecondarySwitch,
  TertiarySecondary,
  SecondaryPrimary,
  TertiaryPrimary,
} from "../assets/styles/Styles";
import { ModeContext } from "../contexts/ModeContext";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
  animation: rotateAnimation 4s linear infinite;
  @keyframes rotateAnimation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  @media (min-width: 750px) {
    width: 6rem;
    height: 6rem;
  }
  @media (min-width: 1024px) {
    width: 7rem;
    height: 7rem;
  }
`;
const StyledP = styled.p`
  width: 70vw;
  text-align: center;
  line-height: 1.8;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.5rem;
  color: ${TertiarySecondary};
  text-shadow: 1px 1px ${SecondaryPrimary};
  & > a:link,
  a:visited {
    color: ${TertiarySecondary};
    text-shadow: 1px 1px ${SecondaryPrimary};
  }
  & > a:hover,
  a:active {
    cursor: ${PointerSwitch};
    color: ${TertiaryPrimary};
    text-shadow: 1px 1px ${SecondarySwitch};
  }
  & > span {
    font-family: "Roboto", sans-serif;
  }
  @media (min-width: 750px) {
    font-size: 2rem;
    line-height: 2;
  }
  @media (min-width: 1200px) {
    width: 50vw;
  }
`;

const BlogsLoading = () => {
  const { mode } = useContext(ModeContext);
  return (
    <StyledDiv>
      <StyledImg src={mode ? LogoLight : Logo} alt="logo" />
      <StyledP>
        If Google services are not available in your area or this page is taking
        longer than expected, please click on{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://zun-liang.github.io/alt-blogs/"
        >
          this link
        </a>{" "}
        to read my blogs <span>(*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ</span>
      </StyledP>
    </StyledDiv>
  );
};

export default BlogsLoading;
