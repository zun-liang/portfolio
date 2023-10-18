/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import {
  BasicLink,
  HoverColorSwitch,
  ParagraphColorSwitch,
  TextShadowSwitch,
} from "../assets/styles/Styles";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledP = styled.p`
  text-align: center;
  font-family: "Black Ops One", sans-serif;
  font-size: 2rem;
  color: ${ParagraphColorSwitch};
  text-shadow: ${TextShadowSwitch};
`;
const StyledLink = styled(BasicLink)`
  padding: 0.5rem;
  border: 2px dashed ${ParagraphColorSwitch};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${ParagraphColorSwitch};
  }
  &:hover,
  &:active {
    color: ${ParagraphColorSwitch};
    background-color: ${HoverColorSwitch};
  }
`;

const Logout = ({ theme }) => {
  useEffect(() => {
    document.title = "Log Out ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);
  return (
    <PostContainer>
      <StyledP $theme={theme}>૮꒰˶ᵕ ༝ᵕ˶꒱აᶻ 𝗓 𐰁ᶻ </StyledP>
      <StyledP $theme={theme}>You've successfully logged out!</StyledP>
      <StyledLink $theme={theme} to="/">
        Go back Home
      </StyledLink>
    </PostContainer>
  );
};

export default Logout;
//should only show up after i did action to log out
