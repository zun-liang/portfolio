/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";

import Logo from "../../public/apple-touch-icon.png";

const AboutContainer = styled.div`
  width: 40%;
  height: 100%;
  padding: 4rem 0;
`;
const StyledDiv = styled.div`
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
const StyledLink = styled.a`
  text-decoration: none;
  &:link,
  &:visited {
    color: var(--focus2);
  }
`;
const StyledH2 = styled.h2`
  font-family: "Black Ops One", cursive;
  margin: 1rem 0 0.5rem;
  ${StyledLink} {
    color: var(--focus1);
  }
`;
const StyledP = styled.p`
  color: var(--focus2);
`;
const StyledList = styled.ul``;
const StyledListItem = styled.li`
  list-style: none;
  color: var(--focus2);
`;
const About = () => {
  return (
    <AboutContainer>
      <StyledDiv>
        <StyledH1>About me</StyledH1>
        <StyledImg src={Logo} alt="decoration logo" />
      </StyledDiv>
      <StyledH2>Leanring Journey</StyledH2>
      <StyledP>
        I embarked on my front-end development journey in February 2022, driven
        by a deep fascination with programming. Prior to this, I had minimal
        experience with coding, having only dabbled in Markdown for blogging.
        This journey has been a rollercoaster of excitement and frustration.
        Completing challenges on freeCodeCamp brings a profound sense of
        accomplishment, yet certain concepts often elude me. Nevertheless, I'm
        proud of my progress. I've acquired a diverse skill set, from HTML and
        CSS to JavaScript and web design. This journey has taught me resilience
        and the value of perseverance. I'm excited to keep pushing forward in
        front-end development.
      </StyledP>
      <StyledH2>Languages & Libraries</StyledH2>
      <StyledList>
        <StyledListItem>🪄 HTML</StyledListItem>
        <StyledListItem>🪄 CSS</StyledListItem>
        <StyledListItem>🪄 JavaScript</StyledListItem>
        <StyledListItem>🪄 React</StyledListItem>
        <StyledListItem>🪄 React Router</StyledListItem>
        <StyledListItem>🪄 Styled-Components</StyledListItem>
      </StyledList>
      <StyledH2>
        <StyledLink
          target="_blank"
          href="https://github.com/zun-liang/certificates-achievements-archive"
        >
          Achievements & Certificates
        </StyledLink>
      </StyledH2>
      <StyledList>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.freecodecamp.org/certification/zun-liang/responsive-web-design"
          >
            ✨ Responsive Web Design Certification (freeCodeCamp)
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://www.freecodecamp.org/certification/zun-liang/javascript-algorithms-and-data-structures"
          >
            ✨ JavaScript Algorithms and Data Structures Certification
            (freeCodeCamp)
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            target="_blank"
            href="https://scrimba.com/certificate/u9enxdu5/greact"
          >
            ✨ Advanced React Certification (Scrimba)
          </StyledLink>
        </StyledListItem>
      </StyledList>
      <StyledP></StyledP>
      {/*<StyledH2>Contributions</StyledH2>
      <StyledP></StyledP>*/}
      <StyledH2>Future Goals</StyledH2>
      <StyledList>
        <StyledListItem>🔮 Jest</StyledListItem>
        <StyledListItem>🔮 TypeScript</StyledListItem>
        <StyledListItem>🔮 React Native</StyledListItem>
        <StyledListItem>🔮 Next.js</StyledListItem>
      </StyledList>
      <StyledP></StyledP>
    </AboutContainer>
  );
};

export default About;
