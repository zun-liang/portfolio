import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { nanoid } from "nanoid";
import { useState } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  BackgroundSecondary,
  BasicButton,
  BasicInput,
  ErrorSwitch,
  HighlightPrimary,
  OpaqueSwitch,
  SecondaryPrimary,
  TertiaryPrimary,
  TertiarySecondary,
  TertiaryTransparent,
} from "../assets/styles/Styles";
import { db } from "../firebase";

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
const InvalidMessage = styled.p`
  margin-top: -0.6rem;
  font-family: "Black Ops One", sans-serif;
  color: ${ErrorSwitch};
  font-size: 0.8rem;
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

const CommentInterface = ({ setComment, playSwoosh, blogID }) => {
  const blogRef = doc(db, "blogs", blogID);
  const commentsRef = collection(blogRef, "comments");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [invalidComment, setInvalidComment] = useState(false);
  const handleName = (e) => setName(e.target.value);
  const handleText = (e) => setText(e.target.value);

  const handleSubmit = async () => {
    playSwoosh();
    if (name.trim() !== "" && text.trim() !== "") {
      try {
        await addDoc(commentsRef, {
          id: nanoid(),
          name: name,
          timestamp: serverTimestamp(),
          text: text,
        });
        setComment(false);
      } catch (error) {
        console.error("Error while submitting comment:", error);
        throw new Error("Something went wrong while submitting comment");
      }
    } else {
      setInvalidComment(true);
    }
  };

  const handleCancel = () => {
    setName("");
    setText("");
    setInvalidComment(false);
    setComment(false);
  };

  return (
    <StyledForm method="post">
      <StyledLabel>Nickname:</StyledLabel>
      <StyledInput
        type="text"
        id="nickname"
        name="nickname"
        value={name}
        onChange={handleName}
        placeholder="Your nickname..."
        required
      />
      {invalidComment && <InvalidMessage>Nickname is required.</InvalidMessage>}
      <StyledLabel>Comment:</StyledLabel>
      <StyledTextarea
        as="textarea"
        id="comment"
        name="comment"
        value={text}
        onChange={handleText}
        placeholder="Leave your comment here..."
        required
      ></StyledTextarea>
      {invalidComment && <InvalidMessage>Comment is required.</InvalidMessage>}
      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
      <StyledButton onClick={handleCancel}>Cancel</StyledButton>
    </StyledForm>
  );
};

export default CommentInterface;
