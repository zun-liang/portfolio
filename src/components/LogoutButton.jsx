import { signOut } from "firebase/auth";
import { useContext } from "react";
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as LogoutIcon } from "../assets/images/log-out.svg";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { LogoutContext } from "../contexts/LogoutContext";

const StyledLogoutButton = styled(LogoutIcon)`
  width: 1.2rem;
  height: 1.2rem;
  cursor: ${PointerSwitch};
  & > path {
    stroke: ${TertiaryDot};
  }
  &:hover > path {
    stroke: ${PrimarySecondary};
  }
`;

const LogoutButton = () => {
  const loggedin = useContext(AuthContext);
  const { setShowLogout } = useContext(LogoutContext);
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        setShowLogout(true);
        navigate("/logout");
      })
      .catch((error) => {
        console.error("Error while logging out:", error);
        throw new Error("Something went wrong while attempting to log out.");
      });
  };

  return <>{loggedin && <StyledLogoutButton onClick={logout} />}</>;
};

export default LogoutButton;
