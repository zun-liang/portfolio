/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  CursorPointerSwitch,
  ParagraphColorSwitch,
  PrimaryColorSwitch,
  SecondaryTransparent,
  TertiaryColorSwitch,
} from "../assets/styles/Styles";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Website } from "../assets/images/website.svg";
import { ReactComponent as Puzzle } from "../assets/images/puzzle.svg";

const ProjectContainer = styled.div`
  width: 80vw;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 4rem;
  @media (min-width: 1000px) {
    width: 60vw;
  }
`;
const BackLink = styled(Link)`
  width: 11rem;
  margin-bottom: 1rem;
  text-decoration: none;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
  &:link,
  &:visited {
    color: ${TertiaryColorSwitch};
  }
  &:hover,
  &:active {
    text-decoration: underline wavy;
    text-underline-offset: 7px;
  }
`;
const StyledH2 = styled.h2`
  color: ${PrimaryColorSwitch};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 2px 2px ${SecondaryTransparent};
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
    color: ${TertiaryColorSwitch};
    ${WebsiteIcon} {
      fill: ${TertiaryColorSwitch};
    }
    ${PuzzleIcon} > g > path {
      fill: ${TertiaryColorSwitch};
    }
  }
  &:hover,
  &:active {
    color: ${PrimaryColorSwitch};
    cursor: ${CursorPointerSwitch};
    ${WebsiteIcon} {
      fill: ${PrimaryColorSwitch};
    }
    ${PuzzleIcon} > g  > path {
      fill: ${PrimaryColorSwitch};
    }
  }
`;
const Icon = styled(FontAwesomeIcon)`
  width: 1.5rem;
  height: 1.5rem;
`;
const StyledH3 = styled.h3`
  font-family: "Black Ops One", sans-serif;
  color: ${TertiaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryTransparent};
`;
const StyledH4 = styled.h4``;
const StyledP = styled.p`
  color: ${ParagraphColorSwitch};
  line-height: 1.5;
`;
const StyledList = styled.ul`
  padding-left: 2rem;
`;
const StyledListItem = styled.li`
  margin: 0.5rem 0;
  color: ${ParagraphColorSwitch};
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
  }
};

const Project = ({ theme }) => {
  useEffect(() => {
    document.title = "Project ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  const {
    name: projectName,
    codeURL: codeURL,
    liveURL: liveURL,
    femURL: femURL,
  } = useLoaderData();
  return (
    <ProjectContainer>
      <BackLink to="/projects" $theme={theme}>
        Back to projects
      </BackLink>
      <StyledH2 $theme={theme}>{projectName}</StyledH2>
      <StyledDiv>
        <StyledLink target="_blank" href={codeURL} $theme={theme}>
          <Icon icon={faCode} $theme={theme} />
        </StyledLink>
        <StyledLink target="_blank" href={liveURL} $theme={theme}>
          <WebsiteIcon $theme={theme} />
        </StyledLink>
        <StyledLink target="_blank" href={femURL} $theme={theme}>
          <PuzzleIcon $theme={theme} />
        </StyledLink>
      </StyledDiv>

      <StyledH3 $theme={theme}>Introduction</StyledH3>
      <StyledP $theme={theme}>
        This solo project is the solution to Frontend Mentor Challenge Todo App.
      </StyledP>
      <StyledH4 $theme={theme}>In this app, users are able to:</StyledH4>
      <StyledList $theme={theme}>
        <StyledListItem $theme={theme}>
          View the optimal layout for the app depending on their device's screen
          size
        </StyledListItem>
        <StyledListItem $theme={theme}>
          See hover states for all interactive elements on the page
        </StyledListItem>
        <StyledListItem $theme={theme}>
          Add new todos to the list
        </StyledListItem>
        <StyledListItem $theme={theme}>Mark todos as complete</StyledListItem>
        <StyledListItem $theme={theme}>
          Delete todos from the list
        </StyledListItem>
        <StyledListItem $theme={theme}>
          Filter by all/active/complete todos
        </StyledListItem>
        <StyledListItem $theme={theme}>
          Clear all completed todos
        </StyledListItem>
        <StyledListItem $theme={theme}>
          Toggle light and dark mode
        </StyledListItem>
        <StyledListItem $theme={theme}>
          Drag and drop to reorder items on the list
        </StyledListItem>
      </StyledList>
      <StyledH4 $theme={theme}>Built with:</StyledH4>
      <StyledList $theme={theme}>
        <StyledListItem $theme={theme}>HTML</StyledListItem>
        <StyledListItem $theme={theme}>CSS</StyledListItem>
        <StyledListItem $theme={theme}>Javascript</StyledListItem>
        <StyledListItem $theme={theme}>React</StyledListItem>
        <StyledListItem $theme={theme}>Styled-components</StyledListItem>
        <StyledListItem $theme={theme}>Vite</StyledListItem>
        <StyledListItem $theme={theme}>NanoID</StyledListItem>
        <StyledListItem $theme={theme}>React Beautiful DND</StyledListItem>
        <StyledListItem $theme={theme}>@hello-pangea/dnd</StyledListItem>
      </StyledList>
      <StyledH3 $theme={theme}>Purpose and Goal</StyledH3>
      <StyledP $theme={theme}>
        My main purpose of doing this project is to pratice working with
        localStorage. At the time of doing this project, I haven't learned how
        to store data except for saving them in localStorage/sessionStorage.
      </StyledP>
      <StyledH3 $theme={theme}>Spotlight</StyledH3>
      <StyledP $theme={theme}>spotlight paragraph goes here...</StyledP>
      <StyledH3 $theme={theme}>What I learned</StyledH3>
      <StyledP $theme={theme}>
        In this project, I especially learned how to use NanoID to generate
        React map keys and how to use React Beautiful DND. I used to think that
        NanoID can only generate random IDs which is not helpful for generating
        React map keys. However, I found that if I use NanoID to generate to do
        item's id and use its id as key, then it works perfectly. Moreover, the
        original React Beautiful DND is no longer maintaned...
      </StyledP>
      <StyledH3 $theme={theme}>Useful Resources</StyledH3>
      <StyledH4 $theme={theme}>CSS Related</StyledH4>
      <StyledList $theme={theme}>
        <StyledListItem $theme={theme}>
          Border Gradient with Border Radius
        </StyledListItem>
      </StyledList>
    </ProjectContainer>
  );
};

export default Project;
