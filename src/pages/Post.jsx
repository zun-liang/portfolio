import { Link } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { CursorPointerSwitch, HoverColorSwitch } from "../assets/styles/Styles";
import { PrimaryColorSwitch, SecondaryColorSwitch } from "../assets/styles/Styles";

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
  margin-bottom: 2rem;
`;
const StyledP = styled.p`
  font-family: "Black Ops One", sans-serif;
  font-size: 2rem;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  border: 2px solid ${PrimaryColorSwitch};
  border-radius: 5px;
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

const Post = ({ theme, logout, user }) => {
  return (
    <PostContainer>
      <StyledH1 $theme={theme}>♡⸜(˶˃ ᵕ ˂˶)⸝♡</StyledH1>
      <StyledP $theme={theme}>You've successfully posted your blog!</StyledP>
      <StyledLink to="/logout">
        <StyledButton $theme={theme} onClick={logout}>
          Log out
        </StyledButton>
      </StyledLink>
      <StyledP $theme={theme}>admin: {user?.email}</StyledP>
    </PostContainer>
  );
};

export default Post;
