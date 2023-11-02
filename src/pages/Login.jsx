import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect } from "react";
/* eslint-disable react-refresh/only-export-components */
import { Form, useActionData, useNavigation } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import Party from "../assets/images/party_boygirl.png";
import {
  BasicLink,
  PrimarySecondary,
  SecondaryTransparent,
} from "../assets/styles/Styles";
import {
  BasicButton,
  HoverSwitch,
  OpacitySwitch,
  OutlineSwitch,
  PrimarySwitch,
  PrimaryTertiary,
  SecondarySwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { auth } from "../firebase";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const StyledH2 = styled.h2`
  text-align: center;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.8rem;
  color: ${PrimarySwitch};
  text-shadow: 1px 1px ${SecondaryTransparent};
`;
const StyledImg = styled.img`
  width: 20rem;
`;
const StyledLink = styled(BasicLink)`
  padding: 0.5rem;
  border: 2px dashed ${PrimarySecondary};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${PrimarySecondary};
  }
  &:hover,
  &:active {
    background-color: ${HoverSwitch};
  }
`;
const LoginPage = styled(Form)`
  width: 80vw;
  border: 5px ridge ${SecondarySwitch};
  background-color: ${OpacitySwitch};
  border-radius: 5px;
  padding: 2rem;
  display: grid;
  row-gap: 1.5rem;
  @media (min-width: 375px) {
    width: 70vw;
  }
  @media (min-width: 750px) {
    width: 60vw;
  }
  @media (min-width: 1024px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: 40vw;
  }
`;
const StyledLabel = styled.label`
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimarySwitch};
  text-align: left;
`;
const StyledInput = styled.input`
  height: 2rem;
  margin-top: -1rem;
  padding: 0 0.7rem;
  border-radius: 5px;
  border: none;
  border: 2px solid ${TertiarySecondary};
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  color: ${PrimaryTertiary};
  background-color: white;
  &:focus {
    outline: ${OutlineSwitch};
  }
  &:autofill,
  &:autofill:hover,
  &:autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${PrimarySwitch};
  }
`;
const StyledP = styled.p`
  margin: -0.5rem 0;
  font-family: "Black Ops One", sans-serif;
`;
const StyledButton = styled(BasicButton)`
  justify-self: center;
  width: 100%;
  height: 2rem;
  border: 2px solid ${PrimarySwitch};
  background-color: ${TertiarySecondary};
  &:hover,
  &:active {
    background-color: ${HoverSwitch};
  }
`;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await signInWithEmailAndPassword(auth, email, password);
    formData.set("email", "");
    formData.set("password", "");
    return null;
  } catch (error) {
    console.error("Error signing in:", error);
    return "Sorry, the account or password you entered is invalid.";
  }
};

const Login = () => {
  const playPick = useContext(PlayPickContext);
  const { state } = useNavigation();
  const errorMessage = useActionData();
  const loggedin = useContext(AuthContext);

  useEffect(() => {
    document.title = "Log In ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <>
      {loggedin ? (
        <StyledDiv>
          <StyledImg src={Party} alt="party boy girl" />
          <StyledH2>You&apos;ve successfully logged in!</StyledH2>
          <StyledLink to="/editor" onClick={playPick}>
            Go to Editor
          </StyledLink>
        </StyledDiv>
      ) : (
        <LoginPage method="post" replace>
          <StyledLabel htmlFor="email">Admin</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter admin email..."
            required
          />
          <StyledLabel htmlFor="password">Password</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            name="password"
            placeholder="Enter admin password..."
            required
          />
          {errorMessage && <StyledP>{errorMessage}</StyledP>}
          <StyledButton onClick={playPick} disabled={state === "submitting"}>
            {state === "submitting" ? "Logging in..." : "Log in"}
          </StyledButton>
        </LoginPage>
      )}
    </>
  );
};

export default Login;
//after shows sucessfully logged in for a couple seconds, redirect users to previous page
