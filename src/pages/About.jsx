/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import Logo from "../../public/apple-touch-icon.png";
import LogoLight from "../../public/apple-touch-icon-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as RRIcon } from "../assets/images/react-router.svg";
import { ReactComponent as SCIcon } from "../assets/images/styled-components.svg";
import { ReactComponent as JestIcon } from "../assets/images/jest.svg";
import { ReactComponent as TSIcon } from "../assets/images/typescript.svg";
import { ReactComponent as NextIcon } from "../assets/images/next-js.svg";

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
  font-family: "Black Ops One", cursive;
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
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${({ $theme }) =>
      $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
  }
`;
const StyledH2 = styled.h2`
  margin: 1rem 0 0.5rem;
  font-family: "Black Ops One", cursive;
  color: ${({ $theme }) =>
    $theme ? "var(--light-secondary)" : "var(--dark-secondary)"};
  ${StyledLink} {
    color: ${({ $theme }) =>
      $theme ? "var(--light-secondary)" : "var(--dark-secondary)"};
  }
`;
const StyledP = styled.p`
  margin-bottom: 1rem;
  color: ${({ $theme }) =>
    $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
  @media (min-width: 800px) {
    max-width: 800px;
  }
`;
const StyledList = styled.ul``;
const StyledListItem = styled.li`
  list-style: none;
  line-height: 1.7;
  color: ${({ $theme }) =>
    $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const StyledRRIcon = styled(RRIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path {
    fill: ${({ $theme }) =>
      $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
  }
`;
const StyledSCIcon = styled(SCIcon)`
  width: 1.2rem;
  height: 1.2rem;
  & > path {
    fill: ${({ $theme }) =>
      $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
  }
`;
const StyledJestIcon = styled(JestIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path:first-child {
    fill: ${({ $theme }) =>
      $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
  }
  & > g > path:last-child {
    fill: ${({ $theme }) =>
      $theme ? "var(--light-background)" : "var(--dark-background)"};
  }
`;
const StyledTSIcon = styled(TSIcon)`
  width: 1rem;
  height: 1rem;
  & > rect {
    fill: ${({ $theme }) =>
      $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
  }
  & > path {
    fill: ${({ $theme }) =>
      $theme ? "var(--light-background)" : "var(--dark-background)"};
  }
`;
const StyledNextIcon = styled(NextIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${({ $theme }) =>
    $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)"};
`;

const About = ({ theme }) => {
  return (
    <AboutContainer>
      <StyledDiv>
        <StyledH1>About me</StyledH1>
        <StyledImg src={theme ? LogoLight : Logo} alt="decoration logo" />
      </StyledDiv>
      <Section>
        <StyledH2 $theme={theme}>Journey</StyledH2>
        <StyledP $theme={theme}>
          I embarked on my learning journey in February 2022, driven by a deep
          fascination with programming. Prior to this, I had minimal experience
          with coding, having only dabbled in Markdown for blogging.
        </StyledP>
        <StyledP $theme={theme}>
          This journey has been a rollercoaster of excitement and frustration.
          Completing challenges and projects brings a profound sense of
          accomplishment, yet certain concepts often elude me.
        </StyledP>
        <StyledP $theme={theme}>
          Nevertheless, I'm proud of my progress. I've acquired a diverse skill
          set, from HTML, CSS, JavaScript to React and more. This journey has
          taught me resilience and the value of perseverance. I'm excited to
          keep pushing forward in the field of web development.
        </StyledP>
      </Section>
      <Section>
        <StyledH2 $theme={theme}>Tools</StyledH2>
        <StyledList>
          <StyledListItem $theme={theme}>
            <FontAwesomeIcon icon={faHtml5} />
            <span>HTML5</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <FontAwesomeIcon icon={faCss3Alt} />
            <span>CSS3</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <FontAwesomeIcon icon={faSquareJs} />
            <span>JavaScript</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <FontAwesomeIcon icon={faReact} />
            <span>React</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledSCIcon $theme={theme} />
            <span>Styled-Components</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledRRIcon $theme={theme} />
            <span>React Router</span>
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
              ✞ Responsive Web Design Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/javascript-algorithms-and-data-structures"
            >
              ✞ JavaScript Algorithms and Data Structures Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <StyledLink
              $theme={theme}
              target="_blank"
              href="https://scrimba.com/certificate/u9enxdu5/greact"
            >
              ✞ Advanced React Certification
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
            <FontAwesomeIcon icon={faReact} />
            <span>React Native</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>
            <FontAwesomeIcon icon={faNode} />
            <span>Node.js</span>
          </StyledListItem>
          <StyledListItem $theme={theme}>...</StyledListItem>
        </StyledList>
      </Section>
    </AboutContainer>
  );
};

export default About;
