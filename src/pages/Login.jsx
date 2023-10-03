import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { CursorPointerSwitch, HoverColorSwitch, PrimaryColorSwitch, SecondaryColorSwitch } from "../assets/styles/Styles";
import { auth } from "../firebase";

const LoginPage = styled.div`
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
const StyledLink = styled(Link)`
  text-decoration: none;
  // seems like longer than the button
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
const StyledP = styled.p``;

const Login = ({
  theme,
  email,
  setEmail,
  password,
  setPassword,
  login,
  authToken,
  user,
}) => {
  const [error, setError] = useState(null);

  return (
    <LoginPage $theme={theme}>
      <StyledLabel htmlFor="email" $theme={theme}>
        Email
      </StyledLabel>
      <StyledInput
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        $theme={theme}
        required
      />
      {/* {error && <StyledP>Wrong user/password</StyledP>} */}
      <StyledLink to="editor">
        <StyledButton $theme={theme} onClick={login}>
          Log in
        </StyledButton>
      </StyledLink>
      <StyledP $theme={theme}>admin: {user?.email}</StyledP>
    </LoginPage>
  );
};

export default Login;
// {user?.email}
