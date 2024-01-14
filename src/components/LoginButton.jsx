import { faPenNib, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { PointerSwitch, PrimarySecondary, TertiaryDot } from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { PlayPickContext } from "../contexts/PlayPickContext";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${TertiaryDot};
  &:hover {
    cursor: ${PointerSwitch};
    color: ${PrimarySecondary};
  }
`;

const LoginButton = () => {
  const loggedin = useContext(AuthContext);
  const playPick = useContext(PlayPickContext);
  const navigate = useNavigate();

  const goToEditor = () => {
    playPick();
    navigate("/editor");
  };
  const login = () => {
    playPick();
    navigate("/login");
  };
  return (
    <>
      {loggedin ? (
        <StyledFontAwesomeIcon
          icon={faPenNib}
          aria-label="write"
          onClick={goToEditor}
        />
      ) : (
        <StyledFontAwesomeIcon icon={faRightToBracket} aria-label="log in" onClick={login} />
      )}
    </>
  );
};

export default LoginButton;
