import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 30%;
  height: auto;
  border: 1px solid var(--focus1);
  border-radius: 0.5rem;
`;

const Project = ({ url }) => {
  return (
    <ProjectContainer>
      <p>project preview</p>
      <img id="preview" alt="project preview" />
    </ProjectContainer>
  );
};

export default Project;
