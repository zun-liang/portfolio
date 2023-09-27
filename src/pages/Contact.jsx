/* eslint-disable react/prop-types */
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import Profile from "../assets/images/profile.png";
import SpeechBubble from "../assets/images/hi.png";
import CursorLight from "../assets/images/cursor/coffin-black-30x30.png";
import CursorDark from "../assets/images/cursor/coffin-white-30x30.png";

const StyledDiv = styled.div`
  width: 70%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  //border: 1px solid red;
  //doesn't look good yet.
`;
const StyledForm = styled.form`
  width: 80vw;
  height: 55vh;
  padding: 2rem 0;
  border-radius: 5px;
  border: ${({ $theme }) =>
    $theme
      ? "5px ridge var(--light-primary)"
      : "5px ridge var(--dark-primary)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 800px) {
    height: 60vh;
    gap: 2rem;
  }
  @media (min-width: 1000px) {
    margin-bottom: 1rem;
    width: 60vw;
    height: auto;
    gap: 0.5rem;
  }
`;
const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
  @media (min-width: 800px) {
    width: 7rem;
    height: 7rem;
  }
`;
const StyledSpeechBubble = styled.img`
  width: 3rem;
  @media (min-width: 800px) {
    width: 5rem;
  }
`;
const StyledP = styled.p`
  width: 70%;
  margin: 1rem auto;
  text-align: center;
  font-family: "Black Ops One", cursive;
  font-size: 1.5rem;
  //border: 1px solid red;
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;
const StyledLabel = styled.label`
  width: 80%;
  text-align: left;
  font-family: "Black Ops One", cursive;
`;
const StyledInput = styled.input`
  width: 80%;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 0 0.7rem;
  border-radius: 5px;
  border: ${({ $theme }) =>
    $theme
      ? "2px solid var(--light-primary)"
      : "2px solid var(--dark-primary)"};
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: ${({ $theme }) =>
    $theme ? "var(--light-primary)" : "var(--dark-primary)"};
  &:focus {
    outline: ${({ $theme }) =>
      $theme
        ? "2px solid var(--light-primary)"
        : "2px solid var(--dark-primary)"};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${({ $theme }) =>
      $theme ? "var(--light-primary)" : "var(--dark-primary)"};
    //works for desktop, but not for mobile.
  }
  @media (min-width: 800px) {
    height: 2.5rem;
  }
`;
const StyledTextarea = styled.textarea`
  width: 80%;
  min-height: 8rem;
  resize: none;
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  border: ${({ $theme }) =>
    $theme
      ? "2px solid var(--light-primary)"
      : "2px solid var(--dark-primary)"};
  line-height: 1.2rem;
  overflow-wrap: break-word;
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  color: ${({ $theme }) =>
    $theme ? "var(--light-primary)" : "var(--dark-primary)"};
  &:focus {
    outline: ${({ $theme }) =>
      $theme
        ? "2px solid var(--light-primary)"
        : "2px solid var(--dark-primary)"};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${({ $theme }) =>
      $theme ? "var(--light-primary)" : "var(--dark-primary)"};
  }
`;
const StyledButton = styled.button`
  width: 80%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  cursor: ${({ $theme }) =>
    $theme ? `url(${CursorLight}), pointer` : `url(${CursorDark}), pointer`};
  background-color: ${({ $theme }) =>
    $theme ? "var(--light-tertiary)" : "var(--dark-tertiary)"};
  font-family: "Black Ops One", cursive;
  font-size: 1rem;
  color: ${({ $theme }) =>
    $theme ? "var(--light-primary)" : "var(--dark-primary)"};
  &:hover,
  &:active {
    border: ${({ $theme }) =>
      $theme
        ? "2px solid var(--light-primary)"
        : "2px solid var(--dark-primary)"};
    background-color: ${({ $theme }) =>
      $theme ? "var(--light-hover)" : "var(--dark-hover)"};
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contact = ({ theme }) => {
  const [state, handleSubmit] = useForm("mbjvygnp");
  if (state.succeeded) {
    return (
      <StyledDiv>
        <StyledImg src={Profile} alt="profile picture" />
        <StyledSpeechBubble src={SpeechBubble} alt="speech bubble picture" />
        <StyledP>Thanks for reaching out to me!</StyledP>
        <StyledP>I will get back to you as soon as possible!</StyledP>
      </StyledDiv>
    );
  }
  return (
    <StyledForm
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mbjvygnp"
      method="post"
      $theme={theme}
    >
      <StyledLabel htmlFor="name">Full Name</StyledLabel>
      <StyledInput id="name" type="text" name="name" $theme={theme} required />
      <StyledLabel htmlFor="email">Email Address</StyledLabel>
      <StyledInput
        id="email"
        type="email"
        name="email"
        $theme={theme}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <StyledLabel htmlFor="message">Message</StyledLabel>
      <StyledTextarea id="message" name="message" $theme={theme} required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <StyledButton type="submit" disabled={state.submitting} $theme={theme}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default Contact;
