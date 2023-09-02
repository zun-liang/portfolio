import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 50vw;
  min-height: 50vh;
  padding: 3rem 2rem;
  border: 5px ridge var(--focus1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const StyledP = styled.p`
  color: var(--focus1);
  font-family: "Black Ops One", cursive;
  font-size: 1.5rem;
  //doesn't look very good
`;
const StyledLabel = styled.label`
  width: 80%;
  text-align: left;
  color: var(--focus1);
  font-family: "Black Ops One", cursive;
`;
const StyledInput = styled.input`
  width: 80%;
  height: 2rem;
  border: 2px solid var(--focus1);
  margin-bottom: 1rem;
  &:focus {
    outline: 2px solid var(--focus1);
  }
`;
const StyledTextarea = styled.textarea`
  width: 80%;
  min-height: 5rem;
  border: 2px solid var(--focus1);
  margin-bottom: 1rem;
  resize: none;
  &:focus {
    outline: 2px solid var(--focus1);
  }
`;
const StyledButton = styled.button`
  width: 80%;
  height: 2rem;
  font-family: "Black Ops One", cursive;
  font-size: 1rem;
  color: var(--focus1);
  border: none;
  border-radius: 5px;
  background-color: var(--focus2);
  cursor: pointer;
  &:hover {
    background-color: white;
  }
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mbjvygnp");
  if (state.succeeded) {
    return (
      <StyledP>
        Thanks for reaching out! I will get back to you as soon as possible!
      </StyledP>
    );
  }
  return (
    <StyledForm
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mbjvygnp"
      method="post"
    >
      <StyledLabel htmlFor="name">Full Name</StyledLabel>
      <StyledInput id="name" type="text" name="name" required />
      <StyledLabel htmlFor="email">Email Address</StyledLabel>
      <StyledInput id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <StyledLabel htmlFor="message">Message</StyledLabel>
      <StyledTextarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <StyledButton type="submit" disabled={state.submitting}>
        Submit
      </StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
