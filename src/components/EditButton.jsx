import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryDot,
} from "../assets/styles/Styles";
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

  return (
    <>
      {loggedin && (
        <StyledFontAwesomeIcon
          icon={faPenNib}
          aria-label="edit"
          onClick={editBlog}
        />
      )}
    </>
  );
};

export default EditButton;
