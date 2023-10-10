/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import {
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const StyledH1 = styled.h1`
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
  text-align: center;
`;
const StyledP = styled.p`
  font-family: "Black Ops One", sans-serif;
  font-size: 2rem;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const Post = ({ theme }) => {
  useEffect(() => {
    document.title = "Log Out ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  return (
    <PostContainer>
      <StyledH1 $theme={theme}>૮꒰˶ᵕ ༝ᵕ˶꒱აᶻ 𝗓 𐰁ᶻ </StyledH1>
      <StyledP $theme={theme}>You've successfully logged out!</StyledP>
    </PostContainer>
  );
};

export default Post;
