import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  BackgroundDot,
  BackgroundTransparent,
  OpaqueSwitch,
  PointerSwitch,
  PrimarySwitch,
  SecondaryHover,
  SecondaryTransparent,
  TertiaryHighlight,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { ModeContext } from "../contexts/ModeContext";
import ProjectLinks from "./ProjectLinks";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: ${TertiarySecondary};
  position: relative;
  left: 0;
  transition: left 0.5s ease-in-out;
`;
const ProjectOverviewContainer = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  height: 100%;
  background-color: ${OpaqueSwitch};
  transition: background-color 0.5s ease-out;
  border: 1px solid ${BackgroundTransparent};
  border-radius: 10px;
  transition: border 0.5s ease-out;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.7rem;
  &:hover {
    background-color: ${SecondaryHover};
    transition: background-color 0.5s ease-in;
    border: 1px solid ${BackgroundDot};
    transition: border 0.5s ease-in;
  }
  &:hover ${StyledFontAwesomeIcon} {
    left: 0.7rem;
    transition: left 0.5s ease-in-out;
  }
  @media (min-width: 600px) {
    width: 300px;
  }
  @media (min-width: 750px) {
    margin: 0;
  }
  @media (min-width: 1400px) {
    width: 350px;
  }
`;
const StyledImg = styled.img`
  height: 200px;
  object-fit: cover;
  object-position: top center;
  border: 1px solid ${BackgroundTransparent};
  border-radius: 10px;
  transition: border 0.5s ease-out;
  ${ProjectOverviewContainer}:hover & {
    border: 1px solid ${BackgroundDot};
    transition: border 0.5s ease-in;
  }
`;
const StyledH2 = styled.h2`
  margin-top: 0.5rem;
  font-family: var(--ff-focus);
  font-size: 1.2rem;
  color: ${PrimarySwitch};
  font-weight: 400;
`;
const Time = styled.p`
  font-size: 0.8rem;
  color: ${TertiaryHighlight};
  text-shadow: 1px 0px ${SecondaryTransparent};
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
const StyledP = styled.p`
  color: ${TertiarySecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;
const ProjectLink = styled(Link)`
  width: 100%;
  cursor: ${PointerSwitch};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimarySwitch};
  }
`;
const Read = styled.p`
  font-family: var(--ff-focus);
  color: ${TertiarySecondary};
  font-size: 0.9rem;
`;

const ProjectOverview = ({ projectsArr, playPageTurn }) => {
  const { mode } = useContext(ModeContext);
  const projects = projectsArr.map((project) => (
    <ProjectOverviewContainer key={project.id}>
      <StyledImg
        src={mode ? project.srcLight : project.srcDark}
        alt="project preview"
        aria-label="project preview"
      />
      <StyledH2>{project.name}</StyledH2>
      <StyledDiv>
        <Time>{project.period}</Time>
        <ProjectLinks proj={project} />
      </StyledDiv>
      <StyledP>{project.description}</StyledP>
      <ProjectLink
        to={project.id}
        aria-label="read more"
        onClick={playPageTurn}
      >
        <Read>Read More</Read>
        <StyledFontAwesomeIcon icon={faAngleDoubleRight} />
      </ProjectLink>
    </ProjectOverviewContainer>
  ));
  return <>{projects}</>;
};

export default ProjectOverview;
