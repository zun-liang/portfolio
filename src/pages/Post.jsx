import { useContext, useEffect } from "react";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  BasicLink,
  HoverSwitch,
  ParagraphSwitch,
  SecondaryTertiary,
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
  color: ${ParagraphSwitch};
  text-shadow: 1px 1px ${SecondaryTertiary};
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
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
