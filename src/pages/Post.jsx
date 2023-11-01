import { useContext, useEffect } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Party from "../assets/images/party_boygirl.png";
import {
  BasicButton,
  BasicLink,
  HoverSwitch,
  PrimarySecondary,
  PrimarySwitch,
  SecondaryTransparent,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const StyledImg = styled.img`
  width: 20rem;
`;
const StyledP = styled.p`
  text-align: center;
  grid-column: 1 /4;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.8rem;
  color: ${PrimarySwitch};
  text-shadow: 1px 1px ${SecondaryTransparent};
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
const StyledButton = styled(BasicButton)`
  padding: 0.5rem;
  color: ${PrimarySecondary};
  border: 2px dashed ${PrimarySecondary};
  border-radius: 10px;
  &:hover,
  &:active,
  &:focus {
    background-color: ${HoverSwitch};
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

const Post = ({ draft, setShowPost }) => {
  const playPick = useContext(PlayPickContext);
  const goToEditor = () => setShowPost(false);

  useEffect(() => {
    document.title = "Post ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <PostContainer>
      <StyledImg src={Party} alt="party boy girl" />
      {draft ? (
        <StyledP>You&apos;ve successfully saved your draft!</StyledP>
      ) : (
        <StyledP>You&apos;ve successfully posted your blog!</StyledP>
      )}
      <StyledDiv>
        <StyledButton onClick={goToEditor}>Go to Editor</StyledButton>
        <StyledLink to="/blogs" onClick={playPick}>
          Go to Blogs
        </StyledLink>
      </StyledDiv>
    </PostContainer>
  );
};

export default Post;
