import { deleteDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import useSound from "use-sound";

import { ReactComponent as DeleteIcon } from "../assets/images/icons/delete.svg";
import Crumple from "../assets/sounds/crumple.mp3";
import {
  BasicButton,
  BackContainer,
  PointerSwitch,
  PrimarySwitch,
  TertiaryDot,
  TertiarySecondary,
  ActionDiv,
} from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { SoundContext } from "../contexts/SoundContext";
import { db } from "../firebase";

const StyledDiv = styled(ActionDiv)`
  width: 200px;
`;
const StyledButton = styled(BasicButton)`
  width: 100%;
  border: 2px solid ${TertiarySecondary};
  color: ${TertiarySecondary};
  &:hover,
  :active,
  :focus {
    color: ${PrimarySwitch};
    background-color: ${TertiarySecondary};
    border: 2px solid ${PrimarySwitch};
  }
`;
const StyledP = styled.p`
  text-align: center;
  font-family: "Black Ops One", sans-serif;
  color: ${TertiarySecondary};
`;
const StyledDeleteIcon = styled(DeleteIcon)`
  width: 1.2rem;
  height: 1.2rem;
  & > g > g {
    fill: ${TertiaryDot};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > g > g {
      fill: ${PrimarySwitch};
    }
  }
`;

const DeleteButton = ({ blogID }) => {
  const loggedin = useContext(AuthContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { sound } = useContext(SoundContext);
  const [playCrumple] = useSound(Crumple, { soundEnabled: sound });
  const [deleteDone, setDeleteDone] = useState(false);
  const handleDeleteDone = () => setDeleteDone(false);

  const deleteBlog = async () => {
    try {
      playCrumple();
      await deleteDoc(doc(db, "blogs", blogID));
      if (pathname === "/blogs") {
        setDeleteDone(true);
      } else {
        navigate("/blogs");
      }
    } catch (error) {
      console.error("Error while deleting blog:", error);
      throw new Error("Something went wrong while deleting blog");
    }
  };

  return (
    <>
      {loggedin && (
        <>
          {deleteDone && (
            <BackContainer>
              <StyledDiv>
                <StyledP>Blog deleted.</StyledP>
                <StyledButton onClick={handleDeleteDone}>Ok</StyledButton>
              </StyledDiv>
            </BackContainer>
          )}
          <StyledDeleteIcon onClick={deleteBlog} />
        </>
      )}
    </>
  );
};

export default DeleteButton;
