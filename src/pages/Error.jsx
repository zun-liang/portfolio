import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Kuma from "../assets/images/ojigi_animal_kuma.png";
import {
  BasicLink,
  HoverSwitch,
  ParagraphSwitch,
  SecondaryTertiary,
} from "../assets/styles/Styles";

const ErrorPage = styled.div`
  width: 100%;
  height: var(--app-height);
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
  width: 80%;
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
  font-family: "Black Ops One", sans-serif;
  color: ${ParagraphSwitch};
  text-shadow: 1px 1px ${SecondaryTertiary};
  @media (min-width: 750px) {
    font-size: 2rem;
    width: 70%;
  }
  @media (min-width: 1350px) {
    width: 50%;
  }
`;
const StyledLink = styled(BasicLink)`
  padding: 0.5rem;
  border: 2px dashed ${ParagraphSwitch};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${ParagraphSwitch};
  }
  &:hover,
  &:active {
    color: ${ParagraphSwitch};
    background-color: ${HoverSwitch};
  }
`;

const Error = () => {
  useEffect(() => {
    document.title = "Error ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  const error = useRouteError();
  console.log(error);

  return (
    <ErrorPage>
      <StyledImg src={Kuma} alt="sorry bear" />
      <StyledP>{error.message}</StyledP>
      <StyledLink to="/">Go Back Home</StyledLink>
    </ErrorPage>
  );
};

export default Error;
