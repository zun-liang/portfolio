import { signInWithEmailAndPassword } from "firebase/auth";
/* eslint-disable react-refresh/only-export-components */
import { Form, redirect } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";

import {
  CursorPointerSwitch,
  HoverColorSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";
import { auth } from "../firebase";

const LoginPage = styled(Form)`
  width: 40vw;
  border: 5px ridge ${SecondaryColorSwitch};
  border-radius: 5px;
  padding: 2rem;
  display: grid;
  row-gap: 1rem;
`;
const StyledLabel = styled.label`
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimaryColorSwitch};
  text-align: left;
`;
const StyledInput = styled.input`
  height: 2rem;
  padding: 0 0.7rem;
  border-radius: 5px;
  border: none;
  border: 2px solid ${SecondaryColorSwitch};
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: ${PrimaryColorSwitch};
  background-color: white;
  &:focus {
    outline: 2px solid ${SecondaryColorSwitch};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${PrimaryColorSwitch};
    //works for desktop, but not for mobile.
  }
`;
const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  border: 2px solid ${PrimaryColorSwitch};
  border-radius: 5px;
  cursor: ${CursorPointerSwitch};
  background-color: transparent;
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
    return redirect("/editor");
  } catch (error) {
    console.error("Error signing in:", error);
    // Handle the error as needed.
  }
};

const Login = ({ theme }) => {
  useEffect(() => {
    document.title = "Log In ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);

  return (
    <>
      <LoginPage method="post" $theme={theme} replace>
        <StyledLabel htmlFor="email" $theme={theme}>
          Email
        </StyledLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
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
          $theme={theme}
          required
        />
        {/* {error && <StyledP>Wrong user/password</StyledP>} */}
        <StyledButton $theme={theme}>Log in</StyledButton>
      </LoginPage>
    </>
  );
};

export default Login;
