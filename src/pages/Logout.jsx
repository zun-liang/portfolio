/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import {
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
const Post = ({ theme }) => {
  useEffect(() => {
    document.title = "Log Out ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);
  return (
    <PostContainer>
      <StyledP $theme={theme}>૮꒰˶ᵕ ༝ᵕ˶꒱აᶻ 𝗓 𐰁ᶻ </StyledP>
      <StyledP $theme={theme}>You've successfully logged out!</StyledP>
    </PostContainer>
  );
};

export default Post;
