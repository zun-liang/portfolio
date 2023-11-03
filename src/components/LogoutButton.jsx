import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import { useContext } from "react";
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { LogoutContext } from "../contexts/LogoutContext";
import { auth } from "../firebase";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${TertiaryDot};
  &:hover {
    cursor: ${PointerSwitch};
    color: ${PrimarySecondary};
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

  return (
    <>
      {loggedin && (
        <StyledFontAwesomeIcon icon={faRightFromBracket} onClick={logout} />
      )}
    </>
  );
};

export default LogoutButton;
