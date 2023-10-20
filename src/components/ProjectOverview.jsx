import { useEffect } from "react";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  CursorPointerSwitch,
  OpaqueSwitch,
  PrimaryColorSwitch,
  PrimaryTertiary,
  SecondaryHover,
  TertiaryParagraph,
} from "../assets/styles/Styles";

const ProjectLink = styled(Link)`
  width: 100%;
  cursor: ${CursorPointerSwitch};
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimaryColorSwitch};
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
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
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
    border: ${({ $theme }) =>
      $theme ? "1px solid transparent" : "1px solid var(--dark-paragraph)"};
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

const ProjectOverview = ({ projectsArr, theme, playPageTurn }) => {
  useEffect(() => {
    document.title = "Project ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  const projects = projectsArr.map((project) => (
    <ProjectLink
      $theme={theme}
      to={project.id}
      key={project.id}
      onClick={playPageTurn}
    >
      <ProjectOverviewContainer $theme={theme}>
        <StyledImg
          src={theme ? project.srcLight : project.srcDark}
          alt="project preview"
        />
        <StyledH2 $theme={theme}>{project.name}</StyledH2>
        <StyledP $theme={theme}>{project.description}</StyledP>
      </ProjectOverviewContainer>
    </ProjectLink>
  ));
  return <>{projects}</>;
};

export default ProjectOverview;
