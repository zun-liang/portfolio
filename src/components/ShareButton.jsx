import styled from "styled-components";
import { ReactComponent as ShareIcon } from "../assets/images/icons/share.svg";
import { PrimarySecondary, PointerSwitch } from "../assets/styles/Styles";
import { useState } from "react";

const StyledShareIcon = styled(ShareIcon)`
  width: 1.5rem;
  height: 1.5rem;
  fill: ${({ $share, theme }) =>
    $share && theme.mode
      ? "var(--light-primary)"
      : $share && !theme.mode
      ? "var(--dark-secondary)"
      : !$share && theme.mode
      ? "var(--light-tertiary)"
      : "var(--dark-highlight)"};
  &:hover {
    fill: ${PrimarySecondary};
    cursor: ${PointerSwitch};
  }
  @media (min-width: 1350px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;
const ShareButton = () => {
  const [share, setShare] = useState(false);
  const handleShare = () => setShare(true);
  return <StyledShareIcon onClick={handleShare} $share={share} />;
};

export default ShareButton;
