import {
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faNode,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import Logo from "../assets/images/favicon/dark/apple-touch-icon.png";
import LogoLight from "../assets/images/favicon/light/apple-touch-icon.png";
import { ReactComponent as FBIcon } from "../assets/images/icons/firebase.svg";
import { ReactComponent as JestIcon } from "../assets/images/icons/jest.svg";
import { ReactComponent as NextIcon } from "../assets/images/icons/next-js.svg";
import { ReactComponent as RRIcon } from "../assets/images/icons/react-router.svg";
import { ReactComponent as ReduxIcon } from "../assets/images/icons/redux.svg";
import { ReactComponent as SCIcon } from "../assets/images/icons/styled-components.svg";
import { ReactComponent as RTLIcon } from "../assets/images/icons/testing-library.svg";
import { ReactComponent as TSIcon } from "../assets/images/icons/typescript.svg";
import { ReactComponent as VSCIcon } from "../assets/images/icons/vscode.svg";
import {
  ParagraphSwitch,
  PointerSwitch,
  SecondaryParagraph,
  TertiarySwitch,
} from "../assets/styles/Styles";
import { ModeContext } from "../contexts/ModeContext";
import { PlayPickContext } from "../contexts/PlayPickContext";

const AboutContainer = styled.div`
  width: 80vw;
  margin: -1rem 0 auto;
  @media (min-width: 750px) {
    margin: 0 auto 0;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
    width: 70vw;
    padding: 0 0 2rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 8rem;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv = styled.div`
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledImg = styled.img`
  margin-top: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  animation: rotateAnimation 4s linear infinite;
  @keyframes rotateAnimation {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  cursor: ${PointerSwitch};
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${ParagraphSwitch};
  }
  > span {
    color: ${TertiarySwitch};
    text-shadow: -1px -1px ${SecondaryParagraph};
  }
`;
const StyledH2 = styled.h2`
  margin: 1rem 0 0.5rem;
  font-family: "Black Ops One", sans-serif;
  color: ${TertiarySwitch};
  text-shadow: -1px -1px ${SecondaryParagraph};
  ${StyledLink} {
    color: ${TertiarySwitch};
    text-shadow: -1px -1px ${SecondaryParagraph};
  }
`;
const StyledP = styled.p`
  margin-bottom: 1rem;
  color: ${ParagraphSwitch};
  line-height: 1.5;
  @media (min-width: 750px) {
    max-width: 800px;
  }
`;
const StyledList = styled.ul`
  margin-bottom: 1rem;
`;
const StyledListItem = styled.li`
  list-style: none;
  line-height: 1.7;
  color: ${ParagraphSwitch};
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  color: ${SecondaryParagraph};
`;
const StyledRRIcon = styled(RRIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  & > g > path {
    fill: ${SecondaryParagraph};
  }
`;
const StyledSCIcon = styled(SCIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  & > path {
    fill: ${SecondaryParagraph};
  }
`;
const StyledJestIcon = styled(JestIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path:first-child {
    fill: ${SecondaryParagraph};
  }
  & > g > path:last-child {
    fill: ${TertiarySwitch};
  }
`;
const StyledTSIcon = styled(TSIcon)`
  width: 1rem;
  height: 1rem;
  & > rect {
    fill: ${SecondaryParagraph};
  }
  & > path {
    fill: ${TertiarySwitch};
  }
`;
const StyledNextIcon = styled(NextIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  fill: ${SecondaryParagraph};
`;
const StyledVSCIcon = styled(VSCIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  & > path {
    fill: ${SecondaryParagraph};
  }
`;
const StyledFBIcon = styled(FBIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  fill: ${SecondaryParagraph};
`;
const StyledRTLIcon = styled(RTLIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  & > path {
    fill: ${SecondaryParagraph};
  }
`;
const StyledReduxIcon = styled(ReduxIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiarySwitch};
  & > path {
    fill: ${SecondaryParagraph};
  }
`;

const About = () => {
  const { mode } = useContext(ModeContext);
  const playPick = useContext(PlayPickContext);
  useEffect(() => {
    document.title = "About Me ⟡ Zun Liang ♫₊˚.🎧 ✩｡";
  }, []);
  return (
    <AboutContainer>
      <Section>
        <StyledDiv>
          <StyledH2>Journey</StyledH2>
          <StyledImg src={mode ? LogoLight : Logo} alt="decoration logo" />
        </StyledDiv>
        <StyledP>
          There are always charming programmers 👨🏻‍💻👩🏻‍💻 portrayed in TV shows and
          movies, but one who truly left a lasting impression on me is Penelope
          Garcia from the series "Criminal Minds." I've always held immense
          admiration for her intelligence 🧠, professionalism, confidence, 💪
          and her bold and vibrant fashion choices.
        </StyledP>
        <StyledP>
          Over the "lost" couple of years of the pandemic, I repeatedly asked
          myself the same question: What kind of life do I really want? 🤔 I
          have always been fascinated by programming, but I'd never given it a
          shot. I am so tired of living with a life of regrets. I decided it was
          time to make a change. 🎯 I started my learning journey in 2022, prior
          to this, I had minimal experience with coding, having only dabbled in
          Markdown for blogging.
        </StyledP>
        <StyledP>
          This journey has been a rollercoaster of excitement and frustration.
          Completing challenges and projects brings a profound sense of
          accomplishment, 🥳 yet being eluded by certain abstract concepts
          frustrated me as well. 🤯 Nevertheless, I'm proud of my progress. I've
          acquired diverse skills, from HTML, CSS, and JavaScript to React and
          beyond. 🚀💻🌐 This journey has taught me resilience and the value of
          perseverance. I'm excited to keep pushing forward in the field of web
          development and share my accomplishments and my sense of contentment
          with everyone along the way. 🤗
        </StyledP>
      </Section>
      <Section>
        <StyledH2>Languages</StyledH2>
        <StyledList>
          <StyledListItem>
            <Icon icon={faHtml5} />
            <span>HTML5</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faCss3Alt} />
            <span>CSS3</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faSquareJs} />
            <span>JavaScript ES6+</span>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledH2>Libraries</StyledH2>
          <StyledListItem>
            <Icon icon={faReact} />
            <span>React 18</span>
          </StyledListItem>
          <StyledListItem>
            <StyledSCIcon />
            <span>Styled-Components</span>
          </StyledListItem>
          <StyledListItem>
            <StyledRRIcon />
            <span>React Router v6</span>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledH2>Tools</StyledH2>
          <StyledListItem>
            <Icon icon={faGitAlt} />
            <span>Git</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faGithub} />
            <span>Github</span>
          </StyledListItem>
          <StyledListItem>
            <StyledVSCIcon />
            <span>VS Code</span>
          </StyledListItem>
          <StyledListItem>
            <StyledFBIcon />
            <span>Firebase 9</span>
          </StyledListItem>
        </StyledList>
      </Section>
      <Section>
        <StyledH2>
          <StyledLink
            target="_blank"
            href="https://github.com/zun-liang/certificates-achievements-archive"
            onClick={playPick}
          >
            Achievements
          </StyledLink>
        </StyledH2>
        <StyledList>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/responsive-web-design"
              onClick={playPick}
            >
              <span>✞ </span> Responsive Web Design Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/javascript-algorithms-and-data-structures"
              onClick={playPick}
            >
              <span>✞ </span> JavaScript Algorithms and Data Structures
              Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://scrimba.com/certificate/u9enxdu5/greact"
              onClick={playPick}
            >
              <span>✞ </span> Advanced React Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem>...</StyledListItem>
        </StyledList>
      </Section>
      <Section>
        <StyledH2>Next Challenges</StyledH2>
        <StyledList>
          <StyledListItem>
            <StyledReduxIcon />
            <span>Redux</span>
          </StyledListItem>
          <StyledListItem>
            <StyledJestIcon />
            <span>Jest</span>
          </StyledListItem>
          <StyledListItem>
            <StyledRTLIcon />
            <span>React Testing Library</span>
          </StyledListItem>
          <StyledListItem>
            <StyledTSIcon />
            <span>TypeScript</span>
          </StyledListItem>
          <StyledListItem>
            <StyledNextIcon />
            <span>Next.js</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faReact} />
            <span>React Native</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faNode} />
            <span>Node.js</span>
          </StyledListItem>
          <StyledListItem>...</StyledListItem>
        </StyledList>
      </Section>
    </AboutContainer>
  );
};

export default About;
