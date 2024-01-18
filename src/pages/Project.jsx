import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import {
  BoxShadowSwitch,
  HighlightSwitch,
  ParagraphSwitch,
  PrimaryTertiary,
  SecondaryParagraph,
  SecondaryTransparent,
} from "../assets/styles/Styles";
import BackButton from "../components/BackButton";
import ProjectLinks from "../components/ProjectLinks";
import { ModeContext } from "../contexts/ModeContext";
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
  font-family: var(--ff-focus);
  font-weight: 400;
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
  font-family: var(--ff-focus);
  font-weight: 400;
  text-shadow: -1px -1px ${SecondaryParagraph};
`;
const StyledH4 = styled.h4`
  color: ${PrimaryTertiary};
  text-shadow: -1px -1px ${SecondaryTransparent};
  font-size: 1.1rem;
  font-weight: 400;
  font-family: var(--ff-focus);
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
const FiguresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledFigure = styled.figure`
  margin: 1.5rem auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledImg = styled.img`
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: ${BoxShadowSwitch};
`;
const StyledFigureCaption = styled.figcaption`
  margin: 0.5rem 0;
  text-align: center;
  font-family: var(--ff-focus);
  font-size: 0.9rem;
  color: ${HighlightSwitch};
`;

const Project = () => {
  const { mode } = useContext(ModeContext);
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
        <StyledH4>{proj.funcTitle}</StyledH4>
        <StyledList>
          {proj.functions.map((func) => (
            <StyledListItem key={func.id}>{func.text}</StyledListItem>
          ))}
        </StyledList>
        {proj.funcImages?.map((img) => (
          <StyledFigure key={img.id} style={{ margin: "1.5rem auto" }}>
            <StyledImg
              src={mode ? `${img.srcLight}` : `${img.srcDark}`}
              alt={img.title}
              aria-label={img.title}
              style={{ width: img.width }}
            />
            <StyledFigureCaption>{img.title}</StyledFigureCaption>
          </StyledFigure>
        ))}
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
            <StyledH4 key={spot.id}>{spot.title}</StyledH4>
            {spot.text?.map((p) => (
              <>
                <StyledP>{p.text}</StyledP>
                <FiguresContainer>
                  {p.images?.map((img) => (
                    <StyledFigure key={img.id}>
                      <StyledImg
                        src={mode ? `${img.srcLight}` : `${img.srcDark}`}
                        alt={img.title}
                        aria-label={img.title}
                        style={{ height: img.height }}
                      />
                      <StyledFigureCaption>{img.title}</StyledFigureCaption>
                    </StyledFigure>
                  ))}
                </FiguresContainer>
              </>
            ))}
            <FiguresContainer>
              {spot.images?.map((img) => (
                <StyledFigure key={img.id}>
                  <StyledImg
                    src={mode ? `${img.srcLight}` : `${img.srcDark}`}
                    alt={img.title}
                    aria-label={img.title}
                    style={{ height: img.height }}
                  />
                  <StyledFigureCaption>{img.title}</StyledFigureCaption>
                </StyledFigure>
              ))}
            </FiguresContainer>
          </>
        ))}
        <StyledH3>What I learned⋆｡°✩</StyledH3>
        {proj.learned.map((lea) => (
          <>
            <StyledH4>{lea.title}</StyledH4>
            {lea.text?.map((t) => (
              <StyledP key={t.id}>{t.text}</StyledP>
            ))}
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
