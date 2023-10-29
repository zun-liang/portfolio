/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import styled from "styled-components";
import { domToReact } from "html-react-parser";
import { PrimarySecondary } from "../assets/styles/Styles";

const StyledOverview = styled.p`
  color: ${PrimarySecondary};
  line-height: 1.5;
  & > a {
    text-decoration: none;
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${PrimarySecondary};
    }
  }
`;

const BlogOverview = ({ overview }) => {
  const html = overview;
  const options = {
    replace: (domNode) => {
      if (domNode.name === "p") {
        return <StyledOverview>{domToReact(domNode.children)}</StyledOverview>;
      } else {
        return (
          <StyledOverview>
            {domNode.children && domNode.children.map((child) => child.data)}
          </StyledOverview>
        );
      }
    },
  };

  return <>{parse(html, options)}</>;
};

export default BlogOverview;
