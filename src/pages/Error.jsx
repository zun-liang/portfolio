/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import Kuma from "../assets/images/ojigi_animal_kuma.png";
import {
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";

const ErrorPage = styled.div`
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
  width: 70%;
  text-align: center;
  line-height: 1.5;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;

const Error = ({ theme }) => {
  useEffect(() => {
    document.title = "404 ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);

  return (
    <ErrorPage $theme={theme}>
      <StyledImg src={Kuma} alt="sorry bear picture" />
      <StyledH1 $theme={theme}>
        Sorry, the page you are looking for doesn't seem to exist.
      </StyledH1>
    </ErrorPage>
  );
};

export default Error;
