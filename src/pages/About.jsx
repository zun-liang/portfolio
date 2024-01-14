import {
  faCodepen,
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faMarkdown,
  faNode,
  faNpm,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { ReactComponent as FBIcon } from "../assets/images/brands/firebase.svg";
import { ReactComponent as JestIcon } from "../assets/images/brands/jest.svg";
import { ReactComponent as NetlifyIcon } from "../assets/images/brands/netlify.svg";
import { ReactComponent as NextIcon } from "../assets/images/brands/next-js.svg";
import { ReactComponent as RRIcon } from "../assets/images/brands/react-router.svg";
import { ReactComponent as ReduxIcon } from "../assets/images/brands/redux.svg";
import { ReactComponent as SCIcon } from "../assets/images/brands/styled-components.svg";
import { ReactComponent as RTLIcon } from "../assets/images/brands/testing-library.svg";
import { ReactComponent as TSIcon } from "../assets/images/brands/typescript.svg";
import { ReactComponent as ViteIcon } from "../assets/images/brands/vite.svg";
import { ReactComponent as VSCIcon } from "../assets/images/brands/vscode.svg";
import Logo from "../assets/images/logo-dark.png";
import LogoLight from "../assets/images/logo-light.png";
import {
  BackgroundSwitch,
  ParagraphSwitch,
  PointerSwitch,
  SecondaryParagraph,
  TertiaryPrimary,
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
const AchievementSection = styled(Section)`
  @media (min-width: 1200px) {
    margin-top: -10rem;
  }
`;
const ChallengeSection = styled(Section)`
  @media (min-width: 1200px) {
    grid-column: 1 / 2;
  }
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
  color: ${TertiaryPrimary};
`;
const StyledRRIcon = styled(RRIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path {
    fill: ${TertiaryPrimary};
  }
`;
const StyledSCIcon = styled(SCIcon)`
  width: 1rem;
  height: 1rem;
  & > path {
    fill: ${TertiaryPrimary};
  }
`;
const StyledJestIcon = styled(JestIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path:first-child {
    fill: transparent;
  }
  & > g > path:last-child {
    fill: ${TertiaryPrimary};
  }
`;
const StyledTSIcon = styled(TSIcon)`
  width: 1rem;
  height: 1rem;
  & > rect {
    fill: ${TertiaryPrimary};
  }
  & > path {
    fill: ${BackgroundSwitch};
  }
`;
const StyledNextIcon = styled(NextIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${TertiaryPrimary};
`;
const StyledVSCIcon = styled(VSCIcon)`
  width: 1rem;
  height: 1rem;
  & > path {
    fill: ${TertiaryPrimary};
  }
`;
const StyledFBIcon = styled(FBIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${TertiaryPrimary};
`;
const StyledRTLIcon = styled(RTLIcon)`
  width: 1rem;
  height: 1rem;
  & > path {
    fill: ${TertiaryPrimary};
  }
`;
const StyledReduxIcon = styled(ReduxIcon)`
  width: 1rem;
  height: 1rem;
  & > path {
    fill: ${TertiaryPrimary};
  }
`;
const StyledNetlifyIcon = styled(NetlifyIcon)`
  width: 1rem;
  height: 1rem;
  & > path {
    fill: ${TertiaryPrimary};
  }
`;
const StyledViteIcon = styled(ViteIcon)`
  width: 1rem;
  height: 1rem;
  & > defs > linearGradient > stop {
    stop-color: ${TertiaryPrimary};
  }
`;

const About = () => {
  const { mode } = useContext(ModeContext);
  const playPick = useContext(PlayPickContext);

  useEffect(() => {
    document.title = "About Me ⟡ Zun Liang ˖₊˚ 🦋⋅𓂃 ࣪ ִֶָ☾.˖ ࣪⊹";
  }, []);

  return (
    <AboutContainer>
      <Section>
        <StyledDiv>
          <StyledH2>Journey</StyledH2>
          <StyledImg
            src={mode ? LogoLight : Logo}
            alt="decoration logo"
            aria-label="decoration logo"
          />
        </StyledDiv>
        <StyledP>
          There are always charming programmers 👨🏻‍💻👩🏻‍💻 portrayed in TV shows and
          movies, but one who truly left a lasting impression on me is Penelope
          Garcia from the series &quot;Criminal Minds.&quot; I&apos;ve always
          held immense admiration for her intelligence 🧠, professionalism,
          confidence 💪, and her bold and vibrant fashion choices.
        </StyledP>
        <StyledP>
          Over the &quot;lost&quot; couple of years of the pandemic, I
          repeatedly asked myself the same question: What kind of life do I
          really want 🤔? I have always been fascinated by programming, but
          I&apos;d never given it a shot. I am so tired of living with a life of
          regrets. I decided it was time to make a change 🎯. I started my
          learning journey in 2022, prior to this, I had minimal experience with
          coding, having only dabbled in Markdown for blogging.
        </StyledP>
        <StyledP>
          This journey has been a rollercoaster of excitement and frustration.
          Completing challenges and projects brings a profound sense of
          accomplishment 🥳, yet being eluded by certain abstract concepts
          frustrated me as well 🤯. Nevertheless, I&apos;m proud of my progress.
          I&apos;ve acquired diverse skills, from HTML, CSS, and JavaScript to
          React and beyond 🚀💻🌐. This journey has taught me resilience and the
          value of perseverance. I&apos;m excited to keep pushing forward in the
          field of web development and share my accomplishments and contentment
          with everyone along the way 🤗.
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
          <StyledListItem>
            <StyledTSIcon />
            <span>TypeScript</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faMarkdown} />
            <span>Markdown</span>
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
          <StyledListItem>
            <Icon icon={faNpm} />
            <span>npm</span>
          </StyledListItem>
          <StyledListItem>
            <StyledViteIcon />
            <span>Vite</span>
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
            <span>GitHub</span>
          </StyledListItem>
          <StyledListItem>
            <StyledFBIcon />
            <span>Firebase 9</span>
          </StyledListItem>
          <StyledListItem>
            <StyledVSCIcon />
            <span>VS Code</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faCodepen} />
            <span>CodePen</span>
          </StyledListItem>
          <StyledListItem>
            <StyledNetlifyIcon />
            <span>Netlify</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faFigma} />
            <span>Figma</span>
          </StyledListItem>
        </StyledList>
      </Section>
      <AchievementSection>
        <StyledH2>
          <StyledLink
            target="_blank"
            href="https://github.com/zun-liang/certificates-achievements-archive"
            onClick={playPick}
            aria-label="achievements"
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
              aria-label="Responsive Web Design Certification"
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
              aria-label="Advanced React Certification"
            >
              <span>✞ </span> Advanced React Certification
            </StyledLink>
          </StyledListItem>
          <StyledListItem>...</StyledListItem>
        </StyledList>
      </AchievementSection>
      <ChallengeSection>
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
            <StyledNextIcon />
            <span>Next.js</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faNode} />
            <span>Node.js</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faReact} />
            <span>React Native</span>
          </StyledListItem>
          <StyledListItem>...</StyledListItem>
        </StyledList>
      </ChallengeSection>
    </AboutContainer>
  );
};

export default About;
