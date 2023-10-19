/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styled from "styled-components";

import {
  CursorPointerSwitch,
  PrimaryColorSwitch,
  TertiarySecondary,
} from "../assets/styles/Styles";
import ProjectOverview from "../components/ProjectOverview";
import { projectsCollection } from "../firebase";
import { getDocs, orderBy, query } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

const ProjectsContainer = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 0 0 2rem 0;
  @media (min-width: 800px) {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    column-gap: 2rem;
    row-gap: 1.5rem;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
const View = styled.p`
  font-size: 0.8rem;
  color: ${TertiarySecondary};
  position: relative;
  left: 0;
  transition: left 0.5s ease-in-out;
`;
const StyledLink = styled.a`
  justify-self: start;
  cursor: ${CursorPointerSwitch};
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${PrimaryColorSwitch};
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
  @media (min-width: 800px) {
    grid-column: 1 / 3;
    padding-left: 0.5rem;
  }
  @media (min-width: 1000px) {
    grid-column: 1 / 4;
  }
`;

export const loader = async () => {
  try {
    const projectsRef = projectsCollection;
    const q = query(projectsRef, orderBy("order"));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Projects = ({ theme, playPick }) => {
  useEffect(() => {
    document.title = "Projects ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);
  const projectsArr = useLoaderData();
  return (
    <ProjectsContainer>
      <ProjectOverview projectsArr={projectsArr} theme={theme} />
      <StyledLink
        target="_blank"
        href="https://github.com/zun-liang"
        $theme={theme}
        onClick={playPick}
      >
        <span>View more</span>
        <View $theme={theme}>(∩◕ᗜ◕)⊃━☆ﾟ.*</View>
      </StyledLink>
    </ProjectsContainer>
  );
};

export default Projects;
