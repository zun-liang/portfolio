import styled from "styled-components";

import Project from "../components/Project";

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  border: 1px solid red;
`;
const Projects = () => {
  return (
    <ProjectsContainer>
      <Project url="https://github.com/zun-liang/todo-app" />
    </ProjectsContainer>
  );
};

export default Projects;
