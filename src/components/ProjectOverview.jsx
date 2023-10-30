import { useContext, useEffect } from "react";
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
  TertiarySecondary,
  SecondaryPrimary,
  TertiaryPrimary,
} from "../assets/styles/Styles";
import { ModeContext } from "../contexts/ModeContext";

const ProjectLink = styled(Link)`
  width: 100%;
  cursor: ${PointerSwitch};
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimarySwitch};
  }
  @media (min-width: 600px) {
    width: 300px;
  }
  @media (min-width: 1400px) {
    width: 350px;
  }
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
  @media (min-width: 750px) {
    margin: 0;
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
  font-family: "Black Ops One", sans-serif;
  font-size: 1.1rem;
  color: ${TertiaryPrimary};
`;
const Time = styled.p`
  font-size: 0.8rem;
  color: ${TertiarySecondary};
  text-shadow: 1px 0px ${SecondaryPrimary};
`;
const StyledP = styled.p`
  color: ${TertiarySecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ProjectOverview = ({ projectsArr, playPageTurn }) => {
  const { mode } = useContext(ModeContext);
  useEffect(() => {
    document.title = "Project ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  const projects = projectsArr.map((project) => (
    <ProjectLink to={project.id} key={project.id} onClick={playPageTurn}>
      <ProjectOverviewContainer>
        <StyledImg
          src={mode ? project.srcLight : project.srcDark}
          alt="project preview"
        />
        <StyledH2>{project.name}</StyledH2>
        <Time>{project.period}</Time>
        <StyledP>{project.description}</StyledP>
      </ProjectOverviewContainer>
    </ProjectLink>
  ));
  return <>{projects}</>;
};

export default ProjectOverview;
