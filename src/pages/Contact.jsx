/* eslint-disable react/prop-types */
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import styled from "styled-components";

import SpeechBubble from "../assets/images/hi.png";
import Profile from "../assets/images/profile.png";
import {
  CursorAutoSwitch,
  CursorPointerSwitch,
  HoverColorSwitch,
  OpacitySwitch,
  OutlineSwitch,
  PrimaryColorSwitch,
  TertiaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";

const StyledDiv = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
const StyledForm = styled.form`
  width: 80vw;
  height: 55vh;
  padding: 2rem 0;
  border-radius: 5px;
  border: 5px ridge ${PrimaryColorSwitch};
  background-color: ${OpacitySwitch};
  cursor: ${CursorAutoSwitch};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (min-width: 1000px) {
    margin-bottom: 1rem;
    width: 60vw;
    height: auto;
    gap: 1rem;
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
  width: 100%;
  margin: 1rem auto;
  text-align: left;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.5rem;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryColorSwitch};
  @media (min-width: 800px) {
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
  }
`;
const StyledLabel = styled.label`
  width: 80%;
  text-align: left;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryColorSwitch};
`;
const StyledInput = styled.input`
  width: 80%;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 0 0.7rem;
  border-radius: 5px;
  border: 2px solid ${TertiaryColorSwitch};
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${PrimaryColorSwitch};
  background-color: white;
  &:focus {
    outline: ${OutlineSwitch};
  }
  &::placeholder {
    font-weight: 400;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${PrimaryColorSwitch};
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
  border: 2px solid ${TertiaryColorSwitch};
  line-height: 1.2rem;
  overflow-wrap: break-word;
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: ${PrimaryColorSwitch};
  background-color: white;
  &:focus {
    outline: ${OutlineSwitch};
  }
  &::placeholder {
    font-weight: 400;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${PrimaryColorSwitch};
  }
`;
const StyledButton = styled.button`
  width: 80%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  cursor: ${CursorPointerSwitch};
  background-color: ${TertiaryColorSwitch};
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

const Contact = ({ theme }) => {
  useEffect(() => {
    document.title = "Contact ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);

  const [state, handleSubmit] = useForm("mbjvygnp");
  if (state.succeeded) {
    return (
      <StyledDiv>
        <StyledImg src={Profile} alt="profile picture" />
        <StyledSpeechBubble src={SpeechBubble} alt="speech bubble picture" />
        <StyledP $theme={theme}>Thanks for reaching out to me!</StyledP>
        <StyledP $theme={theme}>
          I will get back to you as soon as possible!
        </StyledP>
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
      <StyledLabel htmlFor="name" $theme={theme}>
        Full Name
      </StyledLabel>
      <StyledInput
        id="name"
        type="text"
        name="name"
        placeholder="Enter your name..."
        $theme={theme}
        required
      />
      <StyledLabel htmlFor="email" $theme={theme}>
        Email Address
      </StyledLabel>
      <StyledInput
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email..."
        $theme={theme}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <StyledLabel htmlFor="message" $theme={theme}>
        Message
      </StyledLabel>
      <StyledTextarea
        id="message"
        name="message"
        placeholder="Please leave me a message here ... (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ"
        $theme={theme}
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <StyledButton type="submit" disabled={state.submitting} $theme={theme}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default Contact;
