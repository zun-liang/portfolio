import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { PointerSwitch, PrimarySecondary } from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ $comment, theme }) =>
    $comment && theme.mode
      ? "var(--light-primary)"
      : $comment && !theme.mode
      ? "var(--dark-secondary)"
      : !$comment && theme.mode
      ? "var(--light-tertiary)"
      : "var(--dark-highlight)"};
  &:hover {
    cursor: ${PointerSwitch};
    color: ${PrimarySecondary};
  }
  @media (min-width: 1350px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const CommentButton = ({ comment, setComment }) => {
  const playPick = useContext(PlayPickContext);
  const handleComment = () => {
    playPick();
    setComment((prev) => !prev);
  };

  return (
    <StyledFontAwesomeIcon
      icon={faCommentDots}
      aria-label="comment"
      onClick={handleComment}
      $comment={comment}
    />
  );
};

export default CommentButton;
