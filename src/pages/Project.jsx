import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useParams } from "react";
import { useNavigate } from "react-router-dom";
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { ReactComponent as Puzzle } from "../assets/images/puzzle.svg";
import { ReactComponent as Website } from "../assets/images/website.svg";
import {
  ParagraphSwitch,
  PointerSwitch,
  PrimarySwitch,
  PrimaryTertiary,
  SecondaryParagraph,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";
import BackButton from "../components/BackButton";
import { projects } from "../projectsData";

const ProjectContainer = styled.div`
  width: 80vw;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
  @media (min-width: 1024px) {
    width: 70vw;
  }
  @media (min-width: 1200px) {
    width: 60vw;
  }
`;
const StyledH2 = styled.h2`
  color: ${PrimaryTertiary};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 1px 1px ${SecondaryParagraph};
  text-align: center;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
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
  color: ${TertiarySecondary};
  ${StyledLink}:hover & {
    color: ${PrimarySwitch};
  }
`;
const StyledWebsiteIcon = styled(WebsiteIcon)`
  fill: ${TertiarySecondary};
  ${StyledLink}:hover & {
    fill: ${PrimarySwitch};
  }
`;
const StyledPuzzleIcon = styled(PuzzleIcon)`
  & > g > path {
    fill: ${TertiarySecondary};
  }
  ${StyledLink}:hover & {
    & > g > path {
      fill: ${PrimarySwitch};
    }
  }
`;
const StyledH3 = styled.h3`
  color: ${PrimaryTertiary};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 1px 1px ${SecondaryParagraph};
`;
const StyledH4 = styled.h4`
  color: ${PrimaryTertiary};
  font-family: "Black Ops One", sans-serif;
`;
const StyledP = styled.p`
  color: ${ParagraphSwitch};
  line-height: 1.5;
`;
const StyledList = styled.ul`
  padding-left: 2rem;
`;
const StyledListItem = styled.li`
  margin: 0.5rem 0;
  color: ${ParagraphSwitch};
`;

const Project = () => {
  const playPick = useContext(PlayPickContext);
  const navigate = useNavigate();
  const { params } = useParams();
  console.log(params);
  const project = projects
    .filter((proj) => proj.id === params)
    .map((proj) => (
      <>
        <StyledH2 key={proj.id}>{proj.name}</StyledH2>
        <StyledDiv>
          <StyledLink target="_blank" href={proj.codeURL} onClick={playPick}>
            <Icon icon={faCode} />
          </StyledLink>
          <StyledLink target="_blank" href={proj.liveURL} onClick={playPick}>
            <StyledWebsiteIcon />
          </StyledLink>
          <StyledLink target="_blank" href={proj.femURL} onClick={playPick}>
            <StyledPuzzleIcon />
          </StyledLink>
        </StyledDiv>
        <StyledH3>Introduction</StyledH3>
        <StyledP>{proj.introduction}</StyledP>
        <StyledH4>In this app, users are able to:</StyledH4>
        <StyledList>
          {proj.functions.map((func) => (
            <StyledListItem key={func}>{func}</StyledListItem>
          ))}
        </StyledList>
        <StyledH4>Built with:</StyledH4>
        <StyledList>
          {proj.tools.map((tool) => (
            <StyledListItem key={tool}>{tool}</StyledListItem>
          ))}
        </StyledList>
        <StyledH3>Purpose and Goal</StyledH3>
        <StyledP>{proj.purpose}</StyledP>
        <StyledH3>Spotlight</StyledH3>
        <StyledP>{proj.spotlight}</StyledP>
        <StyledH3>What I learned</StyledH3>
        <StyledP>{proj.learned}</StyledP>
        <StyledH3>Useful Resources</StyledH3>
        <StyledH4>CSS Related</StyledH4>
        <StyledList>
          <StyledListItem>Border Gradient with Border Radius</StyledListItem>
        </StyledList>
      </>
    ));
  const handleClick = () => {
    navigate("/projects");
    playPick();
  };
  useEffect(() => {
    document.title = "Project ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <ProjectContainer>
      <BackButton handleClick={handleClick} />
      {project}
    </ProjectContainer>
  );
};

export default Project;
