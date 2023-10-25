import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { OpaqueSwitch, PointerSwitch, PrimarySwitch, PrimaryTertiary, SecondaryHover, TertiaryParagraph } from "../assets/styles/Styles";
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
const StyledH2 = styled.h2`
  padding: 1.5rem 0 0.5rem;
  font-family: "Black Ops One", sans-serif;
  font-size: 1.1rem;
  color: ${PrimaryTertiary};
  @media (min-width: 750px) {
    font-size: 1rem;
  }
`;
const StyledP = styled.p`
  color: ${TertiaryParagraph};
  line-height: 1.5;
`;
const ProjectOverviewContainer = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  height: 100%;
  background-color: ${OpaqueSwitch};
  transition: background-color 0.5s ease-out;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: ${SecondaryHover};
    transition: background-color 0.5s ease-in;
    border: ${({ theme }) =>
      theme.mode ? "1px solid transparent" : "1px solid var(--dark-paragraph)"};
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
        <StyledP>{project.description}</StyledP>
      </ProjectOverviewContainer>
    </ProjectLink>
  ));
  return <>{projects}</>;
};

export default ProjectOverview;
