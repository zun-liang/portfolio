import {
  faFacebook,
  faRedditAlien,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShare, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { RedditShareButton } from "react-share";
import styled from "styled-components";

import {
  BackgroundDot,
  BackgroundSwitch,
  BoxShadowSwitch,
  PointerSwitch,
  PrimarySecondary,
  TertiaryHighlight,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";

const ShareContainer = styled.div`
  position: relative;
`;
const CustomizedShare = styled.div`
  background-color: ${BackgroundDot};
  padding: 1.2rem 1.8rem;
  border-radius: 1rem;
  display: flex;
  gap: 1.5rem;
  position: absolute;
  top: 3rem;
  right: 0;
  box-shadow: ${BoxShadowSwitch};
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${TertiaryHighlight};
  font-size: 1.5rem;
  &:hover {
    color: ${PrimarySecondary};
    cursor: ${PointerSwitch};
  }
  @media (min-width: 1350px) {
    font-size: 1.3rem;
  }
`;
const StyledXMark = styled(FontAwesomeIcon)`
  color: ${TertiaryHighlight};
  font-size: 1rem;
`;
const XMarkContainer = styled.div`
  cursor: ${PointerSwitch};
  background-color: ${BackgroundSwitch};
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  border: 2px solid ${TertiaryHighlight};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid ${PrimarySecondary};
  }
  &:hover ${StyledXMark} {
    color: ${PrimarySecondary};
  }
`;
const StyledShareIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${({ $share, theme }) =>
    $share && theme.mode
      ? "var(--light-primary)"
      : $share && !theme.mode
      ? "var(--dark-secondary)"
      : !$share && theme.mode
      ? "var(--light-tertiary)"
      : "var(--dark-highlight)"};
  &:hover {
    color: ${PrimarySecondary};
    cursor: ${PointerSwitch};
  }
  @media (min-width: 1350px) {
    font-size: 1.3rem;
  }
`;

const ShareButton = ({ title, text, url }) => {
  const playPick = useContext(PlayPickContext);
  const [share, setShare] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const updatedTitle = title.split(" ").slice(1).join(" ");
  const updatedText = text.replace(/<[^>]*>/g, "");
  const updatedURL = `https://zunldev.com/blogs/${url}`;

  const handleXMark = () => {
    setShowCustom(false);
    setShare(false);
  };

  const handleShare = async () => {
    setShare(true);
    playPick();
    if (navigator.share) {
      try {
        await navigator.share({
          title: updatedTitle,
          text: updatedText,
          url: updatedURL,
        });
      } catch (error) {
        console.error("Something when wrong while sharing link:", error);
        throw new Error("Something went wrong while sharing link.");
      }
    } else {
      console.log("Web Share API not supported.");
      setShowCustom(true);
    }
  };
  return (
    <ShareContainer>
      <StyledShareIcon
        icon={faShare}
        onClick={handleShare}
        aria-label="share"
        $share={share}
      />
      {showCustom && (
        <CustomizedShare>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="twitter-share-button"
            href={`https://twitter.com/intent/tweet?text=${updatedTitle}&url=${updatedURL}`}
          >
            <StyledFontAwesomeIcon icon={faTwitter} />
          </a>
          <div className="fb-share-button" data-href={`${updatedURL}`}>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              href={`https://www.facebook.com/sharer/sharer.php?u=${updatedURL}`}
              className="fb-xfbml-parse-ignore"
            >
              <StyledFontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            href={`https://t.me/share/url?url=${updatedURL}&text=${updatedText}`}
          >
            <StyledFontAwesomeIcon icon={faTelegram} />
          </a>
          <RedditShareButton
            aria-label="Reddit"
            url={updatedURL}
            title={updatedTitle}
          >
            <StyledFontAwesomeIcon icon={faRedditAlien} />
          </RedditShareButton>
          <XMarkContainer aria-label="close" onClick={handleXMark}>
            <StyledXMark icon={faXmark} />
          </XMarkContainer>
        </CustomizedShare>
      )}
    </ShareContainer>
  );
};

export default ShareButton;
