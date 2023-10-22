/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useContext } from "react";
/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  BasicLink,
  ParagraphColorSwitch,
  TextShadowSwitch,
} from "../assets/styles/Styles";

import {
  BasicButton,
  HoverColorSwitch,
  OpacitySwitch,
  OutlineSwitch,
  PrimaryColorSwitch,
  PrimaryTertiary,
  SecondaryColorSwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { auth } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";

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
  color: ${ParagraphColorSwitch};
  text-shadow: ${TextShadowSwitch};
`;
const StyledLink = styled(BasicLink)`
  padding: 0.5rem;
  border: 2px dashed ${ParagraphColorSwitch};
  border-radius: 10px;
  &:link,
  &:visited {
    color: ${ParagraphColorSwitch};
  }
  &:hover,
  &:active {
    color: ${ParagraphColorSwitch};
    background-color: ${HoverColorSwitch};
  }
`;
const LoginPage = styled(Form)`
  width: 80vw;
  border: 5px ridge ${SecondaryColorSwitch};
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
  color: ${PrimaryColorSwitch};
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
    -webkit-text-fill-color: ${PrimaryColorSwitch};
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
  border: 2px solid ${PrimaryColorSwitch};
  background-color: ${TertiarySecondary};
  &:hover,
  &:active {
    background-color: ${HoverColorSwitch};
  }
`;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    sessionStorage.setItem("Auth Token", user.accessToken);
    formData.set("email", "");
    formData.set("password", "");
    return redirect("/editor");
  } catch (error) {
    console.error("Error signing in:", error);
    return "Sorry, the account or password you entered is invalid.";
  }
};

const Login = ({ theme, playPick }) => {
  const { state } = useNavigation();
  const errorMessage = useActionData();
  const loggedin = useContext(AuthContext);

  useEffect(() => {
    document.title = "Log In ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <>
      {loggedin ? (
        <StyledDiv>
          <StyledH2 $theme={theme}>♡⸜(˶˃ ᵕ ˂˶)⸝♡</StyledH2>
          <StyledH2 $theme={theme}>You've successfully logged in!</StyledH2>
          <StyledLink $theme={theme} to="/editor" onClick={playPick}>
            Go to Editor
          </StyledLink>
        </StyledDiv>
      ) : (
        <LoginPage method="post" $theme={theme} replace>
          <StyledLabel htmlFor="email" $theme={theme}>
            Admin
          </StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter admin email..."
            $theme={theme}
            required
          />
          <StyledLabel htmlFor="password" $theme={theme}>
            Password
          </StyledLabel>
          <StyledInput
            type="password"
            id="password"
            name="password"
            placeholder="Enter admin password..."
            $theme={theme}
            required
          />
          {errorMessage && <StyledP>{errorMessage}</StyledP>}
          <StyledButton
            $theme={theme}
            onClick={playPick}
            disabled={state === "submitting"}
          >
            {state === "submitting" ? "Logging in..." : "Log in"}
          </StyledButton>
        </LoginPage>
      )}
    </>
  );
};

export default Login;
//if it is already logged in, i can login again, weird
