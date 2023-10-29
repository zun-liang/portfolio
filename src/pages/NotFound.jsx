import { useEffect } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Kuma from "../assets/images/ojigi_animal_kuma.png";
import { ParagraphSwitch, SecondaryTertiary } from "../assets/styles/Styles";

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  gap: 1rem;
`;
const StyledImg = styled.img`
  width: 10rem;
`;
const StyledH2 = styled.h2`
  font-size: 2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${ParagraphSwitch};
  text-shadow: 1px 1px ${SecondaryTertiary};
`;
const StyledP = styled.p`
  width: 70%;
  text-align: center;
  font-size: 1.5rem;
  font-family: "Black Ops One", sans-serif;
  color: ${ParagraphSwitch};
  text-shadow: 1px 1px ${SecondaryTertiary};
`;

const NotFound = () => {
  useEffect(() => {
    document.title = "404 ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <NotFoundPage>
      <StyledImg src={Kuma} alt="sorry bear" />
      <StyledH2>404 Not Found</StyledH2>
      <StyledP>
        Sorry, the page you are looking for doesn&apos;t seem to exist.
      </StyledP>
    </NotFoundPage>
  );
};

export default NotFound;
