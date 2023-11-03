/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ReactComponent as CommentIcon } from "../assets/images/icons/comment.svg";
import { PrimarySecondary, PointerSwitch } from "../assets/styles/Styles";

const StyledCommentIcon = styled(CommentIcon)`
  width: 1.5rem;
  height: 1.5rem;
  & > g > g {
    fill: ${({ $comment, theme }) =>
      $comment && theme.mode
        ? "var(--light-primary)"
        : $comment && !theme.mode
        ? "var(--dark-secondary)"
        : !$comment && theme.mode
        ? "var(--light-tertiary)"
        : "var(--dark-highlight)"};
  }
  &:hover {
    cursor: ${PointerSwitch};
    & > g > g {
      fill: ${PrimarySecondary};
    }
  }
  @media (min-width: 1350px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;
const CommentButton = ({ comment, setComment }) => {
  const handleComment = () => setComment((prev) => !prev);
  return <StyledCommentIcon onClick={handleComment} $comment={comment} />;
};

export default CommentButton;
