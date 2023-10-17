/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import styled from "styled-components";

import SpeechBubble from "../assets/images/hi.png";
import Profile from "../assets/images/profile.png";
import {
  BasicButton,
  CursorAutoSwitch,
  HoverColorSwitch,
  OpacitySwitch,
  OutlineSwitch,
  PrimaryColorSwitch,
  TertiaryColorSwitch,
  SecondaryColorSwitch,
  SecondaryTransparent,
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
  margin: 0.5rem 0 1rem;
  padding: 2rem;
  border-radius: 5px;
  border: 5px ridge ${PrimaryColorSwitch};
  background-color: ${OpacitySwitch};
  cursor: ${CursorAutoSwitch};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  @media (min-width: 800px) {
    padding: 2.5rem 3rem;
  }
  @media (min-width: 1000px) {
    padding: 2.5rem 4rem;
    width: 60vw;
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
  text-shadow: 2px 2px ${SecondaryColorSwitch};
  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;
const StyledH2 = styled.h2`
  font-family: "Black Ops One", sans-serif;
  font-size: 1.25rem;
  color: ${PrimaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryTransparent};
  @media (min-width: 800px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;
const StyledList = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  @media (min-width: 800px) {
    margin-top: 0;
  }
`;
const Message = styled.li`
  width: 100%;
  list-style: none;
  line-height: 1.5;
  text-align: center;
  font-size: 0.9rem;
  color: ${TertiaryColorSwitch};
  @media (min-width: 1000px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;
const StyledLabel = styled.label`
  width: 100%;
  text-align: left;
  font-family: "Black Ops One", sans-serif;
  color: ${PrimaryColorSwitch};
`;
const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  margin-top: -0.3rem;
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
  width: 100%;
  max-width: 100%;
  min-height: 8rem;
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
const StyledButton = styled(BasicButton)`
  width: 100%;
  height: 2.5rem;
  border: 2px solid ${PrimaryColorSwitch};
  background-color: ${TertiaryColorSwitch};
  &:hover,
  &:active,
  &:focus {
    background-color: ${HoverColorSwitch};
  }
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
      <StyledH2 $theme={theme}>Hey, dear visitor!</StyledH2>
      <StyledList>
        <Message $theme={theme}>
          Got brilliant ideas to share? Shoot me a message! 💭
        </Message>
        <Message $theme={theme}>
          Up for a fantastic collaboration? Go ahead and shoot me a message! 🤝
        </Message>
        <Message $theme={theme}>
          Just looking to connect and have a chat? No doubt, shoot me a message!
          👋
        </Message>
      </StyledList>
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
