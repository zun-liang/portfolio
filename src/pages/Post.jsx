/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import { HoverColorSwitch } from "../assets/styles/Styles";
import {
  BasicLink,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const StyledP = styled.p`
  text-align: center;
  grid-column: 1 /4;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.8rem;
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const StyledLink = styled(BasicLink)`
  padding: 0.5rem;
  border: 2px dashed ${PrimaryColorSwitch};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${PrimaryColorSwitch};
  }
  &:hover,
  &:active {
    color: ${PrimaryColorSwitch};
    background-color: ${HoverColorSwitch};
  }
`;

const Post = ({ theme, draft }) => {
  useEffect(() => {
    document.title = "Post ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  return (
    <PostContainer>
      <StyledP $theme={theme}>♡⸜(˶˃ ᵕ ˂˶)⸝♡</StyledP>
      {draft ? (
        <StyledP $theme={theme}>You've successfully saved your draft!</StyledP>
      ) : (
        <StyledP $theme={theme}>You've successfully posted your blog!</StyledP>
      )}
      <StyledDiv>
        <StyledLink $theme={theme} to="/editor">
          Go to Editor
        </StyledLink>
        <StyledLink $theme={theme} to="/blogs">
          Go to Blogs
        </StyledLink>
      </StyledDiv>
    </PostContainer>
  );
};

export default Post;
