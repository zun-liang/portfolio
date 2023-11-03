import styled from "styled-components";
import {
  OpaqueSwitch,
  PrimarySecondary,
  TertiaryHighlight,
} from "../assets/styles/Styles";

const CommentsContainer = styled.div`
  background-color: ${OpaqueSwitch};
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Name = styled.p`
  font-family: "Black Ops One", sans-serif;
`;
const Time = styled.p`
  font-size: 0.8rem;
  color: ${TertiaryHighlight};
`;
const Text = styled.p`
  color: ${PrimarySecondary};
`;
const Comments = () => {
  return (
    <CommentsContainer>
      <CommentContainer>
        <Name>Victoria</Name>
        <Time>11/03/2023 14:23 PM</Time>
        <Text>I like your blog! Well done!</Text>
      </CommentContainer>
      <CommentContainer>
        <Name>Max</Name>
        <Time>11/03/2023 14:23 PM</Time>
        <Text>
          There are a couple suggestions for you to better improve it...
        </Text>
      </CommentContainer>
      <CommentContainer>
        <Name>Jay</Name>
        <Time>11/03/2023 14:23 PM</Time>
        <Text>Wanna join our team?</Text>
      </CommentContainer>
    </CommentsContainer>
  );
};

export default Comments;
