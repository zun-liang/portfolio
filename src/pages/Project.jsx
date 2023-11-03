import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  ParagraphSwitch,
  PrimaryTertiary,
  SecondaryParagraph,
  SecondaryTransparent,
} from "../assets/styles/Styles";
import BackButton from "../components/BackButton";
import ProjectLinks from "../components/ProjectLinks";
import { PlayPickContext } from "../contexts/PlayPickContext";
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
  font-size: 1.7rem;
  font-family: "Black Ops One", sans-serif;
  text-shadow: -1px -1px ${SecondaryParagraph};
  text-align: center;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
`;
const StyledH3 = styled.h3`
  color: ${PrimaryTertiary};
  font-size: 1.4rem;
  font-family: "Black Ops One", sans-serif;
  text-shadow: -1px -1px ${SecondaryParagraph};
`;
const StyledH4 = styled.h4`
  color: ${PrimaryTertiary};
  text-shadow: -1px -1px ${SecondaryTransparent};
  font-size: 1.1rem;
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
  const { title } = useParams();

  const project = projects
    .filter((proj) => proj.id === title)
    .map((proj) => (
      <>
        <StyledH2 key={proj.id}>{proj.name}</StyledH2>
        <StyledDiv>
          <ProjectLinks proj={proj} />
        </StyledDiv>
        <StyledH3>Introduction⋆｡°✩</StyledH3>
        {proj.introduction.map((intro) => (
          <StyledP key={intro.id}>{intro.text}</StyledP>
        ))}
        <StyledH4>In this app, users are able to:⋆˙⟡</StyledH4>
        <StyledList>
          {proj.functions.map((func) => (
            <StyledListItem key={func.id}>{func.text}</StyledListItem>
          ))}
        </StyledList>
        <StyledH4>Built with:⋆˙⟡</StyledH4>
        <StyledList>
          {proj.tools.map((tool) => (
            <StyledListItem key={tool}>{tool}</StyledListItem>
          ))}
        </StyledList>
        <StyledH3>Purpose and Goal⋆｡°✩</StyledH3>
        {proj.purpose.map((pur) => (
          <StyledP key={pur.id}>{pur.text}</StyledP>
        ))}
        <StyledH3>Spotlight⋆｡°✩</StyledH3>
        {proj.spotlight.map((spot) => (
          <>
            <StyledH4>{spot.title}</StyledH4>
            <StyledP key={spot.id}>{spot.text}</StyledP>
          </>
        ))}
        <StyledH3>What I learned⋆｡°✩</StyledH3>
        {proj.learned.map((lea) => (
          <>
            <StyledH4>{lea.title}</StyledH4>
            <StyledP key={lea.id}>{lea.text}</StyledP>
          </>
        ))}
      </>
    ));
  const handleClick = () => {
    navigate("/projects");
    playPick();
  };
  useEffect(() => {
    document.title = "Project ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <ProjectContainer>
      <BackButton handleClick={handleClick} />
      {project}
    </ProjectContainer>
  );
};

export default Project;
