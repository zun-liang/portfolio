import styled from "styled-components";
import { useEffect } from "react";
import Project from "../components/Project";

const ProjectsContainer = styled.div`
  width: 80vw;
  min-height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid red;
  @media (min-width: 1000px) {
  }
`;
const Projects = () => {
  useEffect(() => {
    document.title = "Projects ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  return (
    <ProjectsContainer>
      <Project url="https://github.com/zun-liang/todo-app" />
    </ProjectsContainer>
  );
};

export default Projects;
