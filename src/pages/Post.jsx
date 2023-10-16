import { Link } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import { CursorPointerSwitch, HoverColorSwitch } from "../assets/styles/Styles";
import {
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const StyledH1 = styled.h1`
  grid-column: 1 /4;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
  text-align: center;
`;
const StyledP = styled.p`
  grid-column: 1 /4;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.8rem;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledButton = styled.button`
  padding: 0.5rem;
  border: 2px dashed ${PrimaryColorSwitch};
  border-radius: 10px;
  cursor: ${CursorPointerSwitch};
  background-color: transparent;
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimaryColorSwitch};
  &:hover,
  &:active {
    background-color: ${HoverColorSwitch};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Post = ({ theme, logout }) => {
  useEffect(() => {
    document.title = "Post ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  return (
    <PostContainer>
      <StyledH1 $theme={theme}>♡⸜(˶˃ ᵕ ˂˶)⸝♡</StyledH1>
      <StyledP $theme={theme}>You've successfully posted your blog!</StyledP>
      <StyledDiv>
        <StyledLink to="/logout">
          <StyledButton $theme={theme} onClick={logout}>
            Log out
          </StyledButton>
        </StyledLink>
        <StyledLink to="/editor">
          <StyledButton $theme={theme}>Go to Editor</StyledButton>
        </StyledLink>
        <StyledLink to="/blogs">
          <StyledButton $theme={theme}>Go to Blogs</StyledButton>
        </StyledLink>
      </StyledDiv>
    </PostContainer>
  );
};

export default Post;
