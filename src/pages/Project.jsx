import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { ReactComponent as Puzzle } from "../assets/images/puzzle.svg";
import { ReactComponent as Website } from "../assets/images/website.svg";
import {
  BasicLink,
  ParagraphSwitch,
  PointerSwitch,
  PrimarySwitch,
  PrimaryTertiary,
  SecondaryParagraph,
  TertiaryPrimary,
  TertiarySecondary,
} from "../assets/styles/Styles";
import { PlayPickContext } from "../contexts/PlayPickContext";
import { db } from "../firebase";

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
const BackLink = styled(BasicLink)`
  width: 10rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  position: relative;
  top: 0;
  transition: top 0.3s ease-out;
  &:link,
  &:visited {
    color: ${TertiaryPrimary};
  }
  &:hover,
  &:active {
    color: ${TertiaryPrimary};
    top: 5px;
    transition: top 0.3s ease-in;
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
  &:link,
  &:visited {
    color: ${TertiarySecondary};
    ${WebsiteIcon} {
      fill: ${TertiarySecondary};
    }
    ${PuzzleIcon} > g > path {
      fill: ${TertiarySecondary};
    }
  }
  &:hover,
  &:active {
    color: ${PrimarySwitch};
    cursor: ${PointerSwitch};
    ${WebsiteIcon} {
      fill: ${PrimarySwitch};
    }
    ${PuzzleIcon} > g  > path {
      fill: ${PrimarySwitch};
    }
  }
`;
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
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

export const loader = async ({ params }) => {
  const { title } = params;
  const docRef = doc(db, "projects", title);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw new Error(
      "Something went wrong while attempting to retrieve project data."
    );
  }
};

const Project = () => {
  const playPick = useContext(PlayPickContext);
  const {
    name: projectName,
    codeURL: codeURL,
    liveURL: liveURL,
    femURL: femURL,
  } = useLoaderData();

  useEffect(() => {
    document.title = "Project ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);

  return (
    <ProjectContainer>
      <BackLink to="/projects" onClick={playPick}>
        Back to projects
      </BackLink>
      <StyledH2>{projectName}</StyledH2>
      <StyledDiv>
        <StyledLink target="_blank" href={codeURL} onClick={playPick}>
          <Icon icon={faCode} />
        </StyledLink>
        <StyledLink target="_blank" href={liveURL} onClick={playPick}>
          <WebsiteIcon />
        </StyledLink>
        <StyledLink target="_blank" href={femURL} onClick={playPick}>
          <PuzzleIcon />
        </StyledLink>
      </StyledDiv>
      <StyledH3>Introduction</StyledH3>
      <StyledP>
        This solo project is the solution to Frontend Mentor Challenge Todo App.
      </StyledP>
      <StyledH4>In this app, users are able to:</StyledH4>
      <StyledList>
        <StyledListItem>
          View the optimal layout for the app depending on their device's screen
          size
        </StyledListItem>
        <StyledListItem>
          See hover states for all interactive elements on the page
        </StyledListItem>
        <StyledListItem>Add new todos to the list</StyledListItem>
        <StyledListItem>Mark todos as complete</StyledListItem>
        <StyledListItem>Delete todos from the list</StyledListItem>
        <StyledListItem>Filter by all/active/complete todos</StyledListItem>
        <StyledListItem>Clear all completed todos</StyledListItem>
        <StyledListItem>Toggle light and dark mode</StyledListItem>
        <StyledListItem>
          Drag and drop to reorder items on the list
        </StyledListItem>
      </StyledList>
      <StyledH4>Built with:</StyledH4>
      <StyledList>
        <StyledListItem>HTML</StyledListItem>
        <StyledListItem>CSS</StyledListItem>
        <StyledListItem>Javascript</StyledListItem>
        <StyledListItem>React</StyledListItem>
        <StyledListItem>Styled-components</StyledListItem>
        <StyledListItem>Vite</StyledListItem>
        <StyledListItem>NanoID</StyledListItem>
        <StyledListItem>React Beautiful DND</StyledListItem>
        <StyledListItem>@hello-pangea/dnd</StyledListItem>
      </StyledList>
      <StyledH3>Purpose and Goal</StyledH3>
      <StyledP>
        My main purpose of doing this project is to pratice working with
        localStorage. At the time of doing this project, I haven't learned how
        to store data except for saving them in localStorage/sessionStorage.
      </StyledP>
      <StyledH3>Spotlight</StyledH3>
      <StyledP>spotlight paragraph goes here...</StyledP>
      <StyledH3>What I learned</StyledH3>
      <StyledP>
        In this project, I especially learned how to use NanoID to generate
        React map keys and how to use React Beautiful DND. I used to think that
        NanoID can only generate random IDs which is not helpful for generating
        React map keys. However, I found that if I use NanoID to generate to do
        item's id and use its id as key, then it works perfectly. Moreover, the
        original React Beautiful DND is no longer maintaned...
      </StyledP>
      <StyledH3>Useful Resources</StyledH3>
      <StyledH4>CSS Related</StyledH4>
      <StyledList>
        <StyledListItem>Border Gradient with Border Radius</StyledListItem>
      </StyledList>
    </ProjectContainer>
  );
};

export default Project;
