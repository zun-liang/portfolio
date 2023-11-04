import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import styled from "styled-components";

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { ReactComponent as Puzzle } from "../assets/images/icons/puzzle.svg";
import { ReactComponent as Website } from "../assets/images/icons/website.svg";
import {
  PointerSwitch,
  PrimarySecondary,
  TertiaryHighlight,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;
const WebsiteIcon = styled(Website)`
  width: 1.5rem;
  height: 1.5rem;
`;
const PuzzleIcon = styled(Puzzle)`
  width: 1.5rem;
  height: 1.5rem;
  transform: scale(1.2);
`;
const StyledLink = styled.a`
  width: 1.6rem;
  cursor: ${PointerSwitch};
`;
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${TertiaryHighlight};
  ${StyledLink}:hover & {
    color: ${PrimarySecondary};
  }
`;
const StyledWebsiteIcon = styled(WebsiteIcon)`
  fill: ${TertiaryHighlight};
  ${StyledLink}:hover & {
    fill: ${PrimarySecondary};
  }
`;
const StyledPuzzleIcon = styled(PuzzleIcon)`
  & > g > path {
    fill: ${TertiaryHighlight};
  }
  ${StyledLink}:hover & {
    & > g > path {
      fill: ${PrimarySecondary};
    }
  }
`;
const ProjectLinks = ({ proj }) => {
  const playPick = useContext(PlayPickContext);
  return (
    <StyledDiv>
      <StyledLink target="_blank" href={proj.codeURL} onClick={playPick}>
        <Icon icon={faCode} />
      </StyledLink>
      <StyledLink target="_blank" href={proj.liveURL} onClick={playPick}>
        <StyledWebsiteIcon />
      </StyledLink>
      {proj.femURL && (
        <StyledLink target="_blank" href={proj.femURL} onClick={playPick}>
          <StyledPuzzleIcon />
        </StyledLink>
      )}
    </StyledDiv>
  );
};
export default ProjectLinks;
