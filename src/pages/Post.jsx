import { useContext, useEffect } from "react";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { HoverColorSwitch } from "../assets/styles/Styles";
import {
  BasicLink,
  ParagraphColorSwitch,
  TextShadowSwitch,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";

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
  color: ${ParagraphColorSwitch};
  text-shadow: ${TextShadowSwitch};
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
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

const Post = ({ draft }) => {
  const playPick = useContext(PlayPickContext);
  useEffect(() => {
    document.title = "Post ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);
  return (
    <PostContainer>
      <StyledP>♡⸜(˶˃ ᵕ ˂˶)⸝♡</StyledP>
      {draft ? (
        <StyledP>You've successfully saved your draft!</StyledP>
      ) : (
        <StyledP>You've successfully posted your blog!</StyledP>
      )}
      <StyledDiv>
        <StyledLink to="/editor" onClick={playPick}>
          Go to Editor
        </StyledLink>
        <StyledLink to="/blogs" onClick={playPick}>
          Go to Blogs
        </StyledLink>
      </StyledDiv>
    </PostContainer>
  );
};

export default Post;
//should only show up if i posted/saved something
