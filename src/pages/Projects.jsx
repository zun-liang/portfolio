/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import styled from "styled-components";

import {
  PointerSwitch,
  SecondaryTransparent,
  TertiarySecondary,
} from "../assets/styles/Styles";
import ProjectOverview from "../components/ProjectOverview";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { projects } from "../projectsData";

const ProjectsContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  padding: 0 0 2rem 0;
  @media (min-width: 750px) {
    width: 80vw;
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    row-gap: 1.8rem;
    column-gap: 1rem;
  }
  @media (min-width: 1024px) {
    width: 70vw;
    row-gap: 3rem;
  }
  @media (min-width: 1200px) {
    width: 80vw;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 2rem;
  }
  @media (min-width: 1450px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
  }
`;
const View = styled.p`
  font-size: 0.8rem;
  position: relative;
  left: 0;
  transition: left 0.5s ease-in-out;
`;
const StyledLink = styled.a`
  justify-self: end;
  cursor: ${PointerSwitch};
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${TertiarySecondary};
    text-shadow: 1px 1px ${SecondaryTransparent};
  }
  > span {
    font-family: "Black Ops One", sans-serif;
  }
  &:hover ${View} {
    left: 1rem;
    transition: left 0.5s ease-in-out;
  }
  display: flex;
  align-items: center;
  gap: 0.3rem;
  @media (min-width: 750px) {
    grid-column: 1 / -1;
    padding-left: 0.5rem;
  }
`;

const Projects = ({ playPageTurn }) => {
  const playPick = useContext(PlayPickContext);
  const projectsArr = projects;

  useEffect(() => {
    document.title = "Projects ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <ProjectsContainer>
      <ProjectOverview projectsArr={projectsArr} playPageTurn={playPageTurn} />
      <StyledLink
        target="_blank"
        href="https://github.com/zun-liang"
        onClick={playPick}
      >
        <span>View more</span>
        <View>(∩◕ᗜ◕)⊃━☆ﾟ.*</View>
      </StyledLink>
    </ProjectsContainer>
  );
};

export default Projects;
