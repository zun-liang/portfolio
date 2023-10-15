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
import { useEffect } from "react";
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import Logo from "../assets/images/favicon/dark/apple-touch-icon.png";
import LogoLight from "../assets/images/favicon/light/apple-touch-icon.png";
import { ReactComponent as FBIcon } from "../assets/images/icons/firebase.svg";
import { ReactComponent as JestIcon } from "../assets/images/icons/jest.svg";
import { ReactComponent as NextIcon } from "../assets/images/icons/next-js.svg";
import { ReactComponent as RRIcon } from "../assets/images/icons/react-router.svg";
import { ReactComponent as SCIcon } from "../assets/images/icons/styled-components.svg";
import { ReactComponent as TSIcon } from "../assets/images/icons/typescript.svg";
import { ReactComponent as VSCIcon } from "../assets/images/icons/vscode.svg";
import { ReactComponent as RTLIcon } from "../assets/images/icons/testing-library.svg";
import {
  CursorPointerSwitch,
  ParagraphColorSwitch,
  SecondaryPrimary,
  TertiaryColorSwitch,
} from "../assets/styles/Styles";

const AboutContainer = styled.div`
  width: 80vw;
  margin: -1rem auto 0;
  @media (min-width: 1000px) {
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
  cursor: ${CursorPointerSwitch};
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${ParagraphColorSwitch};
  }
  > span {
    color: ${TertiaryColorSwitch};
    text-shadow: 1px 1px ${SecondaryPrimary};
  }
`;
const StyledH2 = styled.h2`
  margin: 1rem 0 0.5rem;
  font-family: "Black Ops One", sans-serif;
  color: ${TertiaryColorSwitch};
  text-shadow: 2px 2px ${SecondaryPrimary};
  ${StyledLink} {
    color: ${TertiaryColorSwitch};
    text-shadow: 2px 2px ${SecondaryPrimary};
  }
`;
const StyledP = styled.p`
  margin-bottom: 1rem;
  color: ${ParagraphColorSwitch};
  line-height: 1.5;
  @media (min-width: 800px) {
    max-width: 800px;
  }
`;
const StyledList = styled.ul`
  margin-bottom: 1rem;
`;
const StyledListItem = styled.li`
  list-style: none;
  line-height: 1.7;
  color: ${ParagraphColorSwitch};
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiaryColorSwitch};
  color: ${SecondaryPrimary};
`;
const StyledRRIcon = styled(RRIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiaryColorSwitch};
  & > g > path {
    fill: ${SecondaryPrimary};
  }
`;
const StyledSCIcon = styled(SCIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiaryColorSwitch};
  & > path {
    fill: ${SecondaryPrimary};
  }
`;
const StyledJestIcon = styled(JestIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path:first-child {
    fill: ${SecondaryPrimary};
  }
  & > g > path:last-child {
    fill: ${TertiaryColorSwitch};
  }
`;
const StyledTSIcon = styled(TSIcon)`
  width: 1rem;
  height: 1rem;
  & > rect {
    fill: ${SecondaryPrimary};
  }
  & > path {
    fill: ${TertiaryColorSwitch};
  }
`;
const StyledNextIcon = styled(NextIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiaryColorSwitch};
  fill: ${SecondaryPrimary};
`;
const StyledVSCIcon = styled(VSCIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiaryColorSwitch};
  & > path {
    fill: ${SecondaryPrimary};
  }
`;
const StyledFBIcon = styled(FBIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiaryColorSwitch};
  fill: ${SecondaryPrimary};
`;
const StyledRTLIcon = styled(RTLIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${TertiaryColorSwitch};
  & > path {
    fill: ${SecondaryPrimary};
  }
`;

const About = ({ theme }) => {
  useEffect(() => {
    document.title = "About Me ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  return (
    <AboutContainer>
      <Section>
        <StyledDiv>
          <StyledH2 $theme={theme}>Journey</StyledH2>
          <StyledImg src={theme ? LogoLight : Logo} alt="decoration logo" />
        </StyledDiv>
        <StyledP $theme={theme}>
          There are always charming programmers portrayed in TV shows and
          movies, but one who truly left a lasting impression on me is Penelope
          Garcia from the series "Criminal Minds." I've always held immense
          admiration for her intelligence, professionalism, confidence, and her
          bold and vibrant fashion choices.
        </StyledP>
        <StyledP $theme={theme}>
          Over the "lost" couple of years of the pandemic, I repeatedly asked
          myself the same question: What kind of life do I really want? I have
          always been fascinated by programming, but I'd never given it a shot.
          I am so tired of living with a life of regrets. I decided it was time
          to make a change. I started my learning journey in 2022, prior to
          this, I had minimal experience with coding, having only dabbled in
          Markdown for blogging.
        </StyledP>
        <StyledP $theme={theme}>
          This journey has been a rollercoaster of excitement and frustration.
          Completing challenges and projects brings a profound sense of
          accomplishment, yet being eluded by certain abstract concepts
          frustrated me as well. Nevertheless, I'm proud of my progress. I've
          acquired diverse skills, from HTML, CSS, and JavaScript to React and
          beyond. This journey has taught me resilience and the value of
          perseverance. I'm excited to keep pushing forward in the field of web
          development and share my accomplishments and my sense of contentment
          with everyone along the way.
        </StyledP>
      </Section>
      <Section>
        <StyledH2 $theme={theme}>Languages</StyledH2>
        <StyledList>
          <StyledListItem $theme={theme}>
            <Icon $theme={theme} icon={faHtml5} />
            <span>HTML5</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <Icon $theme={theme} icon={faCss3Alt} />
            <span>CSS3</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <Icon $theme={theme} icon={faSquareJs} />
            <span>JavaScript ES6+</span>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledH2 $theme={theme}>Libraries</StyledH2>
          <StyledListItem $theme={theme}>
            <Icon $theme={theme} icon={faReact} />
            <span>React 18</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledSCIcon $theme={theme} />
            <span>Styled-Components</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledRRIcon $theme={theme} />
            <span>React Router v6</span>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledH2 $theme={theme}>Tools</StyledH2>
          <StyledListItem $theme={theme}>
            <Icon icon={faGitAlt} $theme={theme} />
            <span>Git</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <Icon icon={faGithub} $theme={theme} />
            <span>Github</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledVSCIcon $theme={theme} />
            <span>VS Code</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledFBIcon $theme={theme} />
            <span>Firebase 9</span>
          </StyledListItem>
        </StyledList>
      </Section>
      <Section>
        <StyledH2 $theme={theme}>
          <StyledLink
            $theme={theme}
            target="_blank"
            href="https://github.com/zun-liang/certificates-achievements-archive"
          >
            Achievements
          </StyledLink>
        </StyledH2>
        <StyledList>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/responsive-web-design"
            >
              <span>✞ </span> Responsive Web Design Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/javascript-algorithms-and-data-structures"
            >
              <span>✞ </span> JavaScript Algorithms and Data Structures
              Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              target="_blank"
              href="https://scrimba.com/certificate/u9enxdu5/greact"
            >
              <span>✞ </span> Advanced React Certification
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </Section>
      <Section>
        <StyledH2 $theme={theme}>Next Challenges</StyledH2>
        <StyledList>
          <StyledListItem $theme={theme}>
            <StyledJestIcon $theme={theme} />
            <span>Jest</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledRTLIcon icon="logos:testing-library" $theme={theme} />
            <span>React Testing Library</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledTSIcon $theme={theme} />
            <span>TypeScript</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledNextIcon $theme={theme} />
            <span>Next.js</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <Icon $theme={theme} icon={faReact} />
            <span>React Native</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <Icon $theme={theme} icon={faNode} />
            <span>Node.js</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>...</StyledListItem>
        </StyledList>
      </Section>
    </AboutContainer>
  );
};

export default About;
