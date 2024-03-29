/* eslint-disable react/prop-types */
import { useForm, ValidationError } from "@formspree/react";
import { useEffect } from "react";
import styled from "styled-components";

import SpeechBubble from "../assets/images/hi.png";
import Profile from "../assets/images/profile.png";
import {
  AutoSwitch,
  BasicButton,
  BasicInput,
  HoverSwitch,
  OpacitySwitch,
  PrimarySwitch,
  SecondarySwitch,
  SecondaryTertiary,
  TertiaryParagraph,
  TertiarySecondary,
} from "../assets/styles/Styles";

const StyledDiv = styled.div`
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 1200px) {
    width: 50%;
  }
`;
const StyledForm = styled.form`
  width: 90vw;
  margin: 0.5rem 0 1rem;
  padding: 2rem;
  border-radius: 5px;
  border: 5px ridge ${PrimarySwitch};
  background-color: ${OpacitySwitch};
  cursor: ${AutoSwitch};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  @media (min-width: 375px) {
    width: 85vw;
  }
  @media (min-width: 750px) {
    padding: 2.5rem 3rem;
  }

  @media (min-width: 1024px) {
    width: 70vw;
    gap: 1.5rem;
  }
  @media (min-width: 1200px) {
    padding: 2.5rem 4rem;
    width: 60vw;
    gap: 1rem;
  }
`;
const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
  @media (min-width: 750px) {
    width: 7rem;
    height: 7rem;
  }
`;
const StyledSpeechBubble = styled.img`
  width: 3rem;
  @media (min-width: 750px) {
    width: 5rem;
  }
`;
const StyledP = styled.p`
  width: 100%;
  margin: 1rem auto;
  text-align: left;
  line-height: 1.5;
  font-family: var(--ff-focus);
  font-size: 1.5rem;
  color: ${TertiaryParagraph};
  text-shadow: 1px 1px ${SecondaryTertiary};
  @media (min-width: 750px) {
    font-size: 2rem;
  }
`;
const StyledH2 = styled.h2`
  font-family: var(--ff-focus);
  font-size: 1.25rem;
  color: ${PrimarySwitch};
  font-weight: 400;
  text-shadow: 1px 1px ${SecondarySwitch};
  @media (min-width: 750px) {
    font-size: 1.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
const StyledList = styled.ul`
  width: 100%;
  margin-top: 0.5rem;
  @media (min-width: 750px) {
    margin-top: 0;
  }
`;
const Message = styled.li`
  width: 100%;
  list-style: none;
  line-height: 1.5;
  text-align: center;
  font-size: 0.9rem;
  color: ${TertiaryParagraph};
  @media (min-width: 1024px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;
const StyledLabel = styled.label`
  width: 100%;
  text-align: left;
  font-family: var(--ff-focus);
  color: ${PrimarySwitch};
`;
const StyledInput = styled(BasicInput)`
  width: 100%;
  height: 2rem;
  margin-top: -0.3rem;
  margin-bottom: 1rem;
  padding: 0 0.7rem;
  @media (min-width: 750px) {
    height: 2.5rem;
  }
`;
const StyledTextarea = styled(BasicInput)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 8rem;
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  line-height: 1.2rem;
  overflow-wrap: break-word;
  &::placeholder {
    font-weight: 400;
  }
`;
const StyledButton = styled(BasicButton)`
  width: 100%;
  height: 2.5rem;
  border: 2px solid ${PrimarySwitch};
  background-color: ${TertiarySecondary};
  &:hover,
  &:active,
  &:focus {
    background-color: ${HoverSwitch};
  }
`;

const Contact = ({ playSwoosh }) => {
  useEffect(() => {
    document.title = "Contact ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  const [state, handleSubmit] = useForm("mbjvygnp");
  if (state.succeeded) {
    playSwoosh();
    return (
      <StyledDiv>
        <StyledImg src={Profile} alt="profile" aria-label="profile" />
        <StyledSpeechBubble src={SpeechBubble} alt="speech bubble" />
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
    >
      <StyledH2>Hey, dear visitor!</StyledH2>
      <StyledList>
        <Message>Got brilliant ideas to share? Shoot me a message! 🌟</Message>
        <Message>
          Up for a fantastic collaboration? Go ahead and shoot me a message! 🤝
        </Message>
        <Message>
          Just looking to connect and have a chat? No doubt, shoot me a message!
          🤗
        </Message>
      </StyledList>
      <StyledLabel htmlFor="name">Full Name</StyledLabel>
      <StyledInput
        id="name"
        type="text"
        name="name"
        placeholder="Enter your name..."
        aria-label="Enter your name..."
        required
      />
      <StyledLabel htmlFor="email">Email Address</StyledLabel>
      <StyledInput
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email..."
        aria-label="Enter your email..."
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <StyledLabel htmlFor="message">Message</StyledLabel>
      <StyledTextarea
        as="textarea"
        id="message"
        name="message"
        placeholder="Please leave me a message here... (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ"
        aria-label="Please leave me a message here... (*ᴗ͈ˬᴗ͈)ꕤ*.ﾟ"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <StyledButton
        type="submit"
        disabled={state.submitting}
        aria-label="submit"
      >
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default Contact;
