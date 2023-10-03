/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Kuma from "../assets/images/ojigi_animal_kuma.png";
import {
  BackgroundSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";
import GlobalStyles from "../GlobalStyles";

const ErrorPage = styled.div`
  width: 100%;
  height: var(--app-height);
  background: ${BackgroundSwitch};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledImg = styled.img`
  width: 10rem;
`;
const StyledH1 = styled.h1`
  width: 50%;
  text-align: center;
  line-height: 1.5;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;

const Error = ({ theme }) => {
  return (
    <>
      <GlobalStyles />
      <ErrorPage $theme={theme}>
        <StyledImg src={Kuma} alt="sorry bear picture" />
        <StyledH1 $theme={theme}>
          Something went wrong, please refresh or contact the site owner.
        </StyledH1>
      </ErrorPage>
    </>
  );
};

export default Error;
