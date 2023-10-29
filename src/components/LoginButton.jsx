import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EditIcon } from "../assets/images/edit.svg";
import { ReactComponent as LoginIcon } from "../assets/images/log-in.svg";
import styled from "styled-components";
import { PlayPickContext } from "../contexts/PlayPickContext";

import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";

const StyledLoginIcon = styled(LoginIcon)`
  width: 1.2rem;
  height: 1.2rem;
  & > g > g {
    fill: ${TertiaryDot};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > g > g {
      fill: ${PrimarySecondary};
    }
  }
`;
const StyledEditIcon = styled(EditIcon)`
  width: 1.2rem;
  height: 1.2rem;
  & > g > g > g > path,
  & > g > g > g > polygon {
    stroke: ${TertiaryDot};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > g > g > g > path,
    & > g > g > g > polygon {
      stroke: ${PrimarySecondary};
    }
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
        <StyledEditIcon onClick={goToEditor} />
      ) : (
        <StyledLoginIcon onClick={login} />
      )}
    </>
  );
};

export default LoginButton;
