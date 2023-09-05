import styled from "styled-components";
import Logo from "../../public/apple-touch-icon.png";

const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
`;
const StyledH1 = styled.h1`
  font-family: "Black Ops One", cursive;
`;
const StyledImg = styled.img`
  width: 2rem;
  height: 2rem;
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
const StyledH2 = styled.h2`
  font-family: "Black Ops One", cursive;
`;
const StyledLink = styled.a`
  text-decoration: none;
  &:link,
  &:visited {
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
      <StyledH1>About me</StyledH1>
      <StyledImg src={Logo} alt="decoration logo" />
      <StyledH2>Leanring Journey</StyledH2>
      <StyledP>
        I started to learn front end development since 2022. I am always
        fascinated by programming. Before doing challenges on freeCodeCamp, I
        have only touched a little markdown when I was blogging. The learning
        journey is both exciting and frustrating. But I am glad that I have made
        it this far.
      </StyledP>
      <StyledH2>Languages & Libraries</StyledH2>
      <StyledList>
        <StyledListItem>HTML</StyledListItem>
        <StyledListItem>CSS</StyledListItem>
        <StyledListItem>JavaScript</StyledListItem>
        <StyledListItem>React</StyledListItem>
        <StyledListItem>React Router</StyledListItem>
        <StyledListItem>Styled-Components</StyledListItem>
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
      <StyledH2>Contributions</StyledH2>
      <StyledP>Currently contributing a project</StyledP>
      <StyledH2>Future goals</StyledH2>
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
