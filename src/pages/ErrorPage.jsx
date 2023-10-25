/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Kuma from "../assets/images/ojigi_animal_kuma.png";
import { BGSwitch, ParagraphSwitch, SecondaryTertiary } from "../assets/styles/Styles";
import GlobalStyles from "../GlobalStyles";

const ErrorPageContainer = styled.div`
  width: 100%;
  height: var(--app-height);
  background: ${BGSwitch};
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

const ErrorPage = () => {
  return (
    <>
      <GlobalStyles />
      <ErrorPageContainer>
        <StyledImg src={Kuma} alt="sorry bear picture" />
        <StyledP>
          Something went wrong, try refreshing the page or come back later.
        </StyledP>
      </ErrorPageContainer>
    </>
  );
};

export default ErrorPage;
