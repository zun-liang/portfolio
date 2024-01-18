/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import styled from "styled-components";
import useSound from "use-sound";

import Magic from "../assets/sounds/magic-mallet.mp3";
import { PointerSwitch, SecondaryTransparent, TertiaryHighlight } from "../assets/styles/Styles";
import ProjectOverview from "../components/ProjectOverview";
import { SoundContext } from "../contexts/SoundContext";
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
`;
const View2 = styled(View)`
  transform: rotate(-30deg);
  transform-origin: center left;
  transition: transform 0.5s ease-in-out;
`;
const StyledLink = styled.a`
  justify-self: end;
  cursor: ${PointerSwitch};
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${TertiaryHighlight};
    text-shadow: 1px 1px ${SecondaryTransparent};
  }
  > span {
    font-family: var(--ff-focus);
    margin-right: 0.3rem;
  }
  &:hover ${View2} {
    transform: rotate(0deg);
    transition: transform 0.5s ease-in-out;
  }
  display: flex;
  align-items: center;
  @media (min-width: 750px) {
    grid-column: 1 / -1;
    padding-left: 0.5rem;
  }
`;

const Projects = ({ playPageTurn }) => {
  const projectsArr = projects;
  const { sound } = useContext(SoundContext);
  const [playMagic] = useSound(Magic, { soundEnabled: sound });

  useEffect(() => {
    document.title = "Projects ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <ProjectsContainer>
      <ProjectOverview projectsArr={projectsArr} playPageTurn={playPageTurn} />
      <StyledLink
        aria-label="view more"
        target="_blank"
        href="https://github.com/zun-liang"
        onClick={playMagic}
      >
        <span>View more</span>
        <View>(∩◕ᗜ◕)⊃</View>
        <View2>━☆ﾟ.*</View2>
      </StyledLink>
    </ProjectsContainer>
  );
};

export default Projects;
