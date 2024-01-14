import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Kuma from "../assets/images/ojigi_animal_kuma.png";
import { BasicLink, HoverSwitch, PrimarySecondary, PrimarySwitch, SecondaryTransparent } from "../assets/styles/Styles";

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
  color: ${PrimarySwitch};
  text-shadow: 1px 1px ${SecondaryTransparent};
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
  border: 2px dashed ${PrimarySecondary};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${PrimarySecondary};
  }
  &:hover,
  &:active {
    background-color: ${HoverSwitch};
  }
`;

const Error = () => {
  const error = useRouteError();

  useEffect(() => {
    document.title = "Error ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <ErrorPage>
      <StyledImg src={Kuma} alt="sorry bear" aria-label="sorry bear"/>
      <StyledP>{error.message}</StyledP>
      <StyledLink to="/">Go Back Home</StyledLink>
    </ErrorPage>
  );
};

export default Error;
