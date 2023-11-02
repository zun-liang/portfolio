import { deleteDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import useSound from "use-sound";

import { ReactComponent as DeleteIcon } from "../assets/images/icons/delete.svg";
import Crumple from "../assets/sounds/crumple.mp3";
import { BasicButton, BGSwitch, PointerSwitch, PrimarySwitch, TertiaryDot, TertiarySecondary } from "../assets/styles/Styles";
import { AuthContext } from "../contexts/AuthContext";
import { SoundContext } from "../contexts/SoundContext";
import { db } from "../firebase";

const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const StyledDiv = styled.div`
  width: 200px;
  background: ${BGSwitch};
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
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
