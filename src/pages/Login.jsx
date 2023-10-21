import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
/* eslint-disable react-refresh/only-export-components */
import {
  Form,
  useActionData,
  useLocation,
  useNavigate,
} from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

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
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${PrimaryColorSwitch};
    //works for desktop, but not for mobile.
  }
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
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    // Handle the error as needed.
  }
};

const Login = ({ theme, playPick }) => {
  const location = useLocation(); // Catch ref page.
  const navigate = useNavigate(); // Redirect to page.
  const actionData = useActionData(); // Catch action function.

  const userFrom = location.state?.from || "/";

  useEffect(() => {
    if (actionData?.accessToken) {
      navigate(userFrom, {
        replace: true,
      });
    }
  }, [actionData]); // If the action function works.

  useEffect(() => {
    document.title = "Log In ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
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
        <StyledButton $theme={theme} onClick={playPick}>
          Log in
        </StyledButton>
      </LoginPage>
    </>
  );
};

export default Login;
//how to clear form after submitted
//error for wrong user/password, how to handle
