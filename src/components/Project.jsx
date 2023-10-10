/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useEffect } from "react";

const ProjectContainer = styled.div`
  width: 30%;
  border: 1px solid blue;
  border-radius: 0.5rem;
`;

const Project = () => {
  useEffect(() => {
    document.title = "Project ⟡ Zun Liang ༉‧₊˚🕯️🖤❀༉‧₊˚.";
  }, []);
  return (
    <ProjectContainer>
      <p>project preview</p>
      <img id="preview" alt="project preview" />
    </ProjectContainer>
  );
};

export default Project;
