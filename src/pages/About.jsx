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
import {
  CursorPointerSwitch,
  ParagraphColorSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
} from "../assets/styles/Styles";

const AboutContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  @media (min-width: 1000px) {
    width: 70%;
    padding: 0 0 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    row-gap: 1rem;
    column-gap: 8rem;
  }
`;
const StyledDiv = styled.div`
  grid-column: 1 / 3;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledH1 = styled.h1`
  font-family: "Black Ops One", sans-serif;
  text-shadow: 2px 2px ${SecondaryColorSwitch};
`;
const StyledImg = styled.img`
  width: 1.8rem;
  height: 1.8rem;
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
const Section = styled.div`
  display: flex;
  flex-direction: column;
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
    color: ${SecondaryColorSwitch};
    text-shadow: 1px 1px ${PrimaryColorSwitch};
  }
`;
const StyledH2 = styled.h2`
  margin: 1rem 0 0.5rem;
  font-family: "Black Ops One", sans-serif;
  color: ${SecondaryColorSwitch};
  text-shadow: 2px 2px ${PrimaryColorSwitch};
  ${StyledLink} {
    color: ${SecondaryColorSwitch};
    text-shadow: 2px 2px ${PrimaryColorSwitch};
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
const StyledList = styled.ul``;
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
  background-color: ${SecondaryColorSwitch};
  color: ${PrimaryColorSwitch};
`;
const StyledRRIcon = styled(RRIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${SecondaryColorSwitch};
  & > g > path {
    fill: ${PrimaryColorSwitch};
  }
`;
const StyledSCIcon = styled(SCIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${SecondaryColorSwitch};
  & > path {
    fill: ${PrimaryColorSwitch};
  }
`;
const StyledJestIcon = styled(JestIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path:first-child {
    fill: ${PrimaryColorSwitch};
  }
  & > g > path:last-child {
    fill: ${SecondaryColorSwitch};
  }
`;
const StyledTSIcon = styled(TSIcon)`
  width: 1rem;
  height: 1rem;
  & > rect {
    fill: ${PrimaryColorSwitch};
  }
  & > path {
    fill: ${SecondaryColorSwitch};
  }
`;
const StyledNextIcon = styled(NextIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${SecondaryColorSwitch};
  fill: ${PrimaryColorSwitch};
`;
const StyledVSCIcon = styled(VSCIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${SecondaryColorSwitch};
  & > path {
    fill: ${PrimaryColorSwitch};
  }
`;
const StyledFBIcon = styled(FBIcon)`
  width: 1rem;
  height: 1rem;
  background-color: ${SecondaryColorSwitch};
  fill: ${PrimaryColorSwitch};
`;

const About = ({ theme }) => {
  return (
    <AboutContainer>
      <StyledDiv>
        <StyledH1 $theme={theme}>About me</StyledH1>
        <StyledImg src={theme ? LogoLight : Logo} alt="decoration logo" />
      </StyledDiv>
      <Section>
        <StyledH2 $theme={theme}>Journey</StyledH2>
        <StyledP $theme={theme}>
          I started my learning journey in February 2022, driven by a long time
          fascination with the elegance and ingenuity of programming. Prior to
          this, I had minimal experience with coding, having only dabbled in
          Markdown for blogging.
        </StyledP>
        <StyledP $theme={theme}>
          This journey has been a rollercoaster of excitement and frustration.
          Completing challenges and projects brings a profound sense of
          accomplishment, yet certain abstract concepts can elude me for a long
          time as well.
        </StyledP>
        <StyledP $theme={theme}>
          Nevertheless, I'm proud of my progress. I've acquired a diverse skill
          set, from HTML, CSS, JavaScript to React and more. This journey has
          taught me resilience and the value of perseverance. I'm excited to
          keep pushing forward in the field of web development.
        </StyledP>
      </Section>
      <Section>
        <StyledH2 $theme={theme}>Languages, Libraries, & Tools</StyledH2>
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
          <StyledListItem $theme={theme}>
            <Icon $theme={theme} icon={faReact} />
            <span>React</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledSCIcon $theme={theme} />
            <span>Styled-Components</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledRRIcon $theme={theme} />
            <span>React Router v6</span>
          </StyledListItem>
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
            <span>Firebase</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>...</StyledListItem>
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
          <StyledListItem $theme={theme}>...</StyledListItem>
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
