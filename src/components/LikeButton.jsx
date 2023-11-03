import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, increment, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";
import useSound from "use-sound";

import Poit from "../assets/sounds/poit.mp3";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryHighlight,
} from "../assets/styles/Styles";
import { SoundContext } from "../contexts/SoundContext";
import { db } from "../firebase";

const StyledDiv = styled.div`
  width: 5rem;
  margin-right: -3.5rem;
  display: flex;
  align-items: center;
  gap: 3px;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ $like, theme }) =>
    $like && theme.mode
      ? "var(--light-primary)"
      : $like && !theme.mode
      ? "var(--dark-secondary)"
      : !$like && theme.mode
      ? "var(--light-tertiary)"
      : "var(--dark-highlight)"};
  @media (min-width: 1350px) {
    font-size: 1.3rem;
    &:hover {
      color: ${PrimarySecondary};
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
  margin-right: -2.2rem;
  font-family: "Black Ops One", sans-serif;
  color: ${TertiaryHighlight};
`;

const LikeButton = ({ blogLikes, blogID }) => {
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(blogLikes);
  const { sound } = useContext(SoundContext);
  const [playPoit] = useSound(Poit, { soundEnabled: sound });
  const likesRef = doc(db, "blogs", blogID);

  const handleLike = async () => {
    if (like) {
      setLike(false);
      setLikeNum((prev) => prev - 1);
      try {
        await updateDoc(likesRef, {
          likes: increment(-1),
        });
      } catch (error) {
        console.error("Error while updating like number:", error);
        throw new Error("Something went wrong while updating like number");
      }
    } else {
      playPoit();
      setLike(true);
      setLikeNum((prev) => prev + 1);
      try {
        await updateDoc(likesRef, {
          likes: increment(1),
        });
      } catch (error) {
        console.error("Error while updating like number:", error);
        throw new Error("Something went wrong while updating like number");
      }
    }
  };

  return (
    <>
      {likeNum > 0 && (
        <StyledLikeNumber>
          {likeNum} {likeNum > 1 ? "likes" : "like"}
        </StyledLikeNumber>
      )}
      <StyledDiv>
        <StyledFontAwesomeIcon
          icon={faHeart}
          onClick={handleLike}
          $like={like}
        />
        {like && <StyledPlus>+1</StyledPlus>}
      </StyledDiv>
    </>
  );
};

export default LikeButton;
