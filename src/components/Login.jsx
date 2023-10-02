/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import {
  PrimaryColorSwitch,
  CursorPointerSwitch,
  HoverColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";
import { Link } from "react-router-dom";

const StyledLogin = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StyledLabel = styled.label`
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  color: ${PrimaryColorSwitch};
`;
const StyledInput = styled.input`
  //width: 80%;
  height: 2rem;
  padding: 0 0.7rem;
  border-radius: 5px;
  border: none;
  //border: 2px solid ${SecondaryColorSwitch};
  font-size: 0.9rem;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: ${PrimaryColorSwitch};
  //background-color: white;
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
const StyledButton = styled(Link)`
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

const Login = ({ showEditor, setShowEditor, theme }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  console.log(showEditor);
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      setShowEditor(true);
    } catch (error) {
      setError(true);
    }

    //error handling
  };

  const logout = async () => {
    await signOut(auth);
    showEditor(false);
  };

  return (
    <StyledLogin>
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
      {error && <StyledP>Wrong user/password</StyledP>}
      <StyledButton $theme={theme} onClick={login} to="/editor">
        Log in
      </StyledButton>
      {showEditor && (
        <>
          <StyledP $theme={theme}>admin: {user?.email}</StyledP>
          <StyledButton as="button" $theme={theme} onClick={logout}>
            Log out
          </StyledButton>
        </>
      )}
    </StyledLogin>
  );
};

export default Login;
