import { useEffect } from "react";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Kuma from "../assets/images/ojigi_animal_kuma.png";
import { ParagraphColorSwitch, TextShadowSwitch } from "../assets/styles/Styles";

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
const StyledP = styled.p`
  width: 70%;
  text-align: center;
  line-height: 1.5;
  font-size: 2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${ParagraphColorSwitch};
  text-shadow: ${TextShadowSwitch};
`;

const Error = () => {
  useEffect(() => {
    document.title = "404 ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <ErrorPage >
      <StyledImg src={Kuma} alt="sorry bear picture" />
      <StyledP >
        Sorry, the page you are looking for doesn't seem to exist.
      </StyledP>
    </ErrorPage>
  );
};

export default Error;
