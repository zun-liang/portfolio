import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 80vw;
  padding: 2rem 0;
  border: 5px ridge var(--focus1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 800px) {
    width: 60vw;
    min-height: 60vh;
    padding: 3rem 2rem;
  }
`;
const StyledP = styled.p`
  color: var(--focus1);
  font-family: "Black Ops One", cursive;
  font-size: 1.5rem;
  border: 1px solid red;
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
  padding: 0 1rem;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  &:focus {
    outline: 2px solid var(--focus1);
  }
`;
const StyledTextarea = styled.textarea`
  width: 80%;
  min-height: 8rem;
  border: 2px solid var(--focus1);
  margin-bottom: 1rem;
  padding: 0.8rem 1rem;
  resize: none;
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  line-height: 1.2rem;
  overflow-wrap: break-word;
  &:focus {
    outline: 2px solid var(--focus1);
  }
`;
const StyledButton = styled.button`
  width: 80%;
  height: 2.5rem;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
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

export default Contact;
