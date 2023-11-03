/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  BackgroundSecondary,
  BasicButton,
  BasicInput,
  HighlightPrimary,
  OpaqueSwitch,
  SecondaryPrimary,
  TertiaryPrimary,
  TertiarySecondary,
  TertiaryTransparent,
} from "../assets/styles/Styles";

const StyledForm = styled.div`
  background-color: ${OpaqueSwitch};
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
const StyledLabel = styled.label`
  font-family: "Black Ops One", sans-serif;
  color: ${HighlightPrimary};
`;
const StyledInput = styled(BasicInput)`
  width: 100%;
  height: 2rem;
  margin-top: -0.5rem;
  border: 2px solid ${TertiarySecondary};
  padding: 0 0.5rem;
`;
const StyledTextarea = styled(BasicInput)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 5rem;
  margin-top: -0.5rem;
  padding: 0.5rem;
  border: 2px solid ${TertiarySecondary};
`;
const StyledButton = styled(BasicButton)`
  width: 100%;
  border: 2px solid ${TertiarySecondary};
  color: ${HighlightPrimary};
  background-color: ${BackgroundSecondary};
  &:hover,
  &:active,
  &:focus {
    color: ${SecondaryPrimary};
    background-color: ${TertiaryTransparent};
    border: 2px solid ${TertiaryPrimary};
  }
`;

const CommentInterface = ({ setComment }) => {
  const handleComment = () => setComment(false);
  return (
    <StyledForm method="post">
      <StyledLabel>Nickname:</StyledLabel>
      <StyledInput type="text" placeholder="Your nickname..." />
      <StyledLabel>Comment:</StyledLabel>
      <StyledTextarea
        as="textarea"
        placeholder="Leave your comment here..."
      ></StyledTextarea>
      <StyledButton>Submit</StyledButton>
      <StyledButton onClick={handleComment}>Cancel</StyledButton>
    </StyledForm>
  );
};

export default CommentInterface;
