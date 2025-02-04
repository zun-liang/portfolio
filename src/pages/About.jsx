import {
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faNode,
  faNpm,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
/* eslint-disable react/prop-types */
import styled from "styled-components";

import { ReactComponent as BashIcon } from "../assets/images/brands/bash.svg";
import { ReactComponent as ExpressIcon } from "../assets/images/brands/express.svg";
import { ReactComponent as FirebaseIcon } from "../assets/images/brands/firebase.svg";
import { ReactComponent as MongoDBIcon } from "../assets/images/brands/mongodb.svg";
import { ReactComponent as MongooseIcon } from "../assets/images/brands/mongoose.svg";
import { ReactComponent as NetlifyIcon } from "../assets/images/brands/netlify.svg";
import { ReactComponent as PostgreSQLIcon } from "../assets/images/brands/postgresql.svg";
import { ReactComponent as ReactRouterIcon } from "../assets/images/brands/react-router.svg";
import { ReactComponent as ReduxIcon } from "../assets/images/brands/redux.svg";
import { ReactComponent as StyledComIcon } from "../assets/images/brands/styled-components.svg";
import { ReactComponent as TypescriptIcon } from "../assets/images/brands/typescript.svg";
import { ReactComponent as ViteIcon } from "../assets/images/brands/vite.svg";
import { ReactComponent as VSCodeIcon } from "../assets/images/brands/vscode.svg";

import Logo from "../assets/images/logo-dark.png";
import LogoLight from "../assets/images/logo-light.png";
import {
  BackgroundSwitch,
  ParagraphSwitch,
  PointerSwitch,
  SecondaryParagraph,
  TertiaryHighlight,
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
    column-gap: 7rem;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;
const LanguageSection = styled(Section)`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
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
  > small {
    color: ${TertiaryHighlight};
  }
`;
const StyledH2 = styled.h2`
  margin: 1rem 0 0.5rem;
  font-family: var(--ff-focus);
  color: ${TertiarySwitch};
  font-weight: 400;
  text-shadow: -1px -1px ${SecondaryParagraph};
  ${StyledLink} {
    color: ${TertiarySwitch};
    text-shadow: -1px -1px ${SecondaryParagraph};
  }
`;
const LanguageTitle = styled(StyledH2)`
  grid-column: 1 / 3;
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
  gap: 0.5rem;
  > span {
    white-space: nowrap;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  width: 1rem;
  height: 1rem;
  color: ${TertiaryPrimary};
`;
const StyledBashIcon = styled(BashIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${TertiaryPrimary};
`;
const StyledExpressIcon = styled(ExpressIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${TertiaryPrimary};
`;
const StyledFirebaseIcon = styled(FirebaseIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${TertiaryPrimary};
`;
const StyledMongoDBIcon = styled(MongoDBIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${TertiaryPrimary};
`;
const StyledMongooseIcon = styled(MongooseIcon)`
  width: 1rem;
  height: 1rem;
  & > g {
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
const StyledPostgreSQLIcon = styled(PostgreSQLIcon)`
  width: 1rem;
  height: 1rem;
  fill: ${TertiaryPrimary};
`;
const StyledReactRouterIcon = styled(ReactRouterIcon)`
  width: 1rem;
  height: 1rem;
  & > g > path {
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
const StyledStyledComIcon = styled(StyledComIcon)`
  width: 1rem;
  height: 1rem;
  & > path {
    fill: ${TertiaryPrimary};
  }
`;
const StyledTypescriptIcon = styled(TypescriptIcon)`
  width: 1rem;
  height: 1rem;
  & > rect {
    fill: ${TertiaryPrimary};
  }
  & > path {
    fill: ${BackgroundSwitch};
  }
`;
const StyledViteIcon = styled(ViteIcon)`
  width: 1rem;
  height: 1rem;
  & > defs > linearGradient > stop {
    stop-color: ${TertiaryPrimary};
  }
`;
const StyledVSCodeIcon = styled(VSCodeIcon)`
  width: 1rem;
  height: 1rem;
  & > path {
    fill: ${TertiaryPrimary};
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
      <LanguageSection>
        <LanguageTitle>Languages & Tools</LanguageTitle>
        <StyledList>
          <StyledListItem>
            <Icon icon={faHtml5} />
            <span>HTML</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faCss3Alt} />
            <span>CSS</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faSquareJs} />
            <span>JavaScript</span>
          </StyledListItem>
          <StyledListItem>
            <StyledTypescriptIcon />
            <span>TypeScript</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faReact} />
            <span>React</span>
          </StyledListItem>
          <StyledListItem>
            <StyledReactRouterIcon />
            <span>React Router</span>
          </StyledListItem>
          <StyledListItem>
            <StyledReduxIcon />
            <span>Redux</span>
          </StyledListItem>
          <StyledListItem>
            <StyledStyledComIcon />
            <span>styled-components</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faFigma} />
            <span>Figma</span>
          </StyledListItem>
          <StyledListItem>
            <StyledViteIcon />
            <span>Vite</span>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledListItem>
            <Icon icon={faNode} />
            <span>Node.js</span>
          </StyledListItem>
          <StyledListItem>
            <StyledExpressIcon />
            <span>Express</span>
          </StyledListItem>
          <StyledListItem>
            <StyledFirebaseIcon />
            <span>Firebase</span>
          </StyledListItem>
          <StyledListItem>
            <StyledMongoDBIcon />
            <span>MongoDB</span>
          </StyledListItem>
          <StyledListItem>
            <StyledMongooseIcon />
            <span>Mongoose</span>
          </StyledListItem>
          <StyledListItem>
            <StyledPostgreSQLIcon />
            <span>PostgreSQL</span>
          </StyledListItem>
        </StyledList>
        <StyledList>
          <StyledListItem>
            <Icon icon={faGitAlt} />
            <span>Git</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faGithub} />
            <span>GitHub</span>
          </StyledListItem>
          <StyledListItem>
            <Icon icon={faNpm} />
            <span>npm</span>
          </StyledListItem>
          <StyledListItem>
            <StyledBashIcon />
            <span>Shell Script</span>
          </StyledListItem>
          <StyledListItem>
            <StyledVSCodeIcon />
            <span>Visual Studio Code</span>
          </StyledListItem>
          <StyledListItem>
            <StyledNetlifyIcon />
            <span>Netlify</span>
          </StyledListItem>
        </StyledList>
      </LanguageSection>
      <Section>
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
              <span>✞ </span> Responsive Web Design Certification{" "}
              <small>06/16/2022</small>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/javascript-algorithms-and-data-structures"
              onClick={playPick}
              aria-label="JavaScript Algorithms and Data Structures Certification"
            >
              <span>✞ </span> JavaScript Algorithms and Data Structures
              Certification <small>11/30/2022</small>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://scrimba.com/certificate/u9enxdu5/greact"
              onClick={playPick}
              aria-label="Advanced React Certificate"
            >
              <span>✞ </span> Advanced React Certificate{" "}
              <small>05/13/2023</small>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/relational-database-v8"
              onClick={playPick}
              aria-label="Relational Database Certification"
            >
              <span>✞ </span> Relational Database Certification{" "}
              <small>05/12/2024</small>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://www.freecodecamp.org/certification/zun-liang/front-end-development-libraries"
              onClick={playPick}
              aria-label="Front End Development Libraries Certification"
            >
              <span>✞ </span> Front End Development Libraries Certification{" "}
              <small>06/24/2024</small>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://github.com/zun-liang/certificates-achievements-archive"
              onClick={playPick}
              aria-label="NodeJS Certificate"
            >
              <span>✞ </span> NodeJS Certificate <small>08/09/2024</small>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              target="_blank"
              href="https://courses.edx.org/certificates/7a07c00ef011460f9a7bd114f30531d5?_gl=1*1azdux2*_gcl_au*MTcyMjA1NzM1OC4xNzMwOTE4OTI1*_ga*MTc2MjMyNTY4Mi4xNzMwOTE4OTI1*_ga_D3KS4KMDT0*MTczODY4OTg3MS40MC4wLjE3Mzg2ODk4NzEuNjAuMC4w"
              onClick={playPick}
              aria-label="CS1301xI Certificate"
            >
              <span>✞ </span> GTx CS1301xI: Computing in Python I Certificate{" "}
              <small>02/02/2025</small>
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </Section>
    </AboutContainer>
  );
};

export default About;
