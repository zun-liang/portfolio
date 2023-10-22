import { signOut } from "firebase/auth";
import { useContext } from "react";
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoutIcon } from "../assets/images/log-out.svg";
import {
  CursorPointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";
import { auth } from "../firebase";
import { AuthContext } from "../contexts/AuthContext";

const StyledLogoutButton = styled(LogoutIcon)`
  width: 1.2rem;
  height: 1.2rem;
  cursor: ${CursorPointerSwitch};
  & > path {
    stroke: ${TertiaryDot};
  }
  &:hover > path {
    stroke: ${PrimarySecondary};
  }
`;

const LogoutButton = ({ theme }) => {
  const loggedin = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/logout");
  };
  return (
    <>{loggedin && <StyledLogoutButton $theme={theme} onClick={logout} />}</>
  );
};
export default LogoutButton;
