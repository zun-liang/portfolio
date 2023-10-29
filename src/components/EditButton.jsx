/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { useNavigate } from "react-router-dom";
import {
  PrimarySwitch,
  PointerSwitch,
  TertiaryDot,
} from "../assets/styles/Styles";
import { ReactComponent as EditIcon } from "../assets/images/icons/edit.svg";

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
      stroke: ${PrimarySwitch};
    }
  }
`;

const EditButton = ({ setBlogToEdit, setTagsToEdit, blogData, blogTag }) => {
  const loggedin = useContext(AuthContext);
  const playPick = useContext(PlayPickContext);
  const navigate = useNavigate();

  const editBlog = () => {
    playPick();
    setBlogToEdit(blogData);
    setTagsToEdit(blogTag);
    navigate("/editor");
  };

  return <>{loggedin && <StyledEditIcon onClick={editBlog} />}</>;
};

export default EditButton;
