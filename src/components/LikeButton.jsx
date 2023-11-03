import styled from "styled-components";
import { ReactComponent as LikeIcon } from "../assets/images/icons/like.svg";
import { useState, useContext } from "react";
import { SoundContext } from "../contexts/SoundContext";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryHighlight,
} from "../assets/styles/Styles";
import Poit from "../assets/sounds/poit.mp3";
import useSound from "use-sound";

const StyledDiv = styled.div`
  width: 5rem;
  margin-right: -3.5rem;
  display: flex;
  align-items: center;
  gap: 3px;
  //border: 1px solid red;
`;
const StyledLikeIcon = styled(LikeIcon)`
  width: 1.6rem;
  height: 1.6rem;
  fill: ${({ $like, theme }) =>
    $like && theme.mode
      ? "var(--light-primary)"
      : $like && !theme.mode
      ? "var(--dark-secondary)"
      : !$like && theme.mode
      ? "var(--light-tertiary)"
      : "var(--dark-highlight)"};
  @media (min-width: 1350px) {
    width: 1.5rem;
    height: 1.5rem;
    &:hover {
      fill: ${PrimarySecondary};
      cursor: ${PointerSwitch};
    }
  }
`;
const StyledPlus = styled.p`
  font-size: 0.7rem;
  color: ${PrimarySecondary};
  position: relative;
  bottom: 0.5rem;
  opacity: 0;
  animation: fade 2s linear;
  @keyframes fade {
    0% {
      bottom: -0.5rem;
      opacity: 1;
    }
    100% {
      bottom: 0.5rem;
      opacity: 0;
    }
  }
`;
const StyledLikeNumber = styled.p`
  width: 5rem;
  margin-right: -2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${TertiaryHighlight};
`;

const LikeButton = () => {
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(0);
  const { sound } = useContext(SoundContext);
  const [playPoit] = useSound(Poit, { soundEnabled: sound });

  const handleLike = () => {
    if (like) {
      setLike(false);
      setLikeNum((prev) => prev - 1);
    } else {
      playPoit();
      setLike(true);
      setLikeNum((prev) => prev + 1);
    }
  };

  return (
    <>
      <StyledLikeNumber>{likeNum} likes</StyledLikeNumber>
      <StyledDiv>
        <StyledLikeIcon onClick={handleLike} $like={like} />
        {like && <StyledPlus>+1</StyledPlus>}
      </StyledDiv>
    </>
  );
};

export default LikeButton;
