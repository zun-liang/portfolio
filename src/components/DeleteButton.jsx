/* eslint-disable react/prop-types */
import styled from "styled-components";
import {
  PrimarySwitch,
  PointerSwitch,
  TertiaryDot,
} from "../assets/styles/Styles";
import { useContext } from "react";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { ReactComponent as DeleteIcon } from "../assets/images/delete.svg";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

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
  const playPick = useContext(PlayPickContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const deleteBlog = async () => {
    try {
      playPick();
      await deleteDoc(doc(db, "blogs", blogID));
      if (pathname === "/blogs") {
        location.reload();
      } else {
        navigate("/blogs");
      }
    } catch (error) {
      console.error("Error while deleting blog:", error);
      throw new Error("Something went wrong while deleting blog");
    }
  };
  return <>{loggedin && <StyledDeleteIcon onClick={deleteBlog} />}</>;
};

export default DeleteButton;
