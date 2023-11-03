import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faSlack,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";

import {
  BGSwitch,
  PointerSwitch,
  PrimarySecondary,
  TertiaryHighlight,
} from "../assets/styles/Styles";

const CustomizedShare = styled.div`
  background: ${BGSwitch};
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  position: absolute;
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
  const [share, setShare] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const updatedTitle = title.split(" ")[1].toString();
  const updatedText = text.replace(/<[^>]*>/g, "");

  const handleShare = async () => {
    setShare(true);
    if (navigator.share) {
      try {
        await navigator.share({
          title: updatedTitle,
          text: updatedText,
          url: `https://zun-liang.github.io/blogs/${url}`,
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
    <>
      <StyledShareIcon icon={faShare} onClick={handleShare} $share={share} />
      {showCustom && (
        <CustomizedShare>
          <StyledFontAwesomeIcon icon={faTwitter} />
          <StyledFontAwesomeIcon icon={faFacebook} />
          <StyledFontAwesomeIcon icon={faLinkedin} />
          <StyledFontAwesomeIcon icon={faDiscord} />
          <StyledFontAwesomeIcon icon={faSlack} />
        </CustomizedShare>
      )}
    </>
  );
};

export default ShareButton;
