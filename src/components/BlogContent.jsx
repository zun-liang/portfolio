/* eslint-disable react/prop-types */
import parse, { domToReact } from "html-react-parser";
import styled from "styled-components";
import { ParagraphColorSwitch } from "../assets/styles/Styles";
const StyledH1 = styled.h1``;
const StyledH2 = styled.h2``;
const StyledH3 = styled.h3``;
const StyledP = styled.p`
  color: ${ParagraphColorSwitch};
  line-height: 1.5;
  & > a {
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${ParagraphColorSwitch};
    }
  }
`;
const StyledList = styled.ul`
  & > li > ul > li {
    margin-left: 1rem;
    color: ${ParagraphColorSwitch};
    line-height: 1.5;
  }
  & > li {
    margin-left: 2rem;
    color: ${ParagraphColorSwitch};
    line-height: 1.5;
  }
  & > li > a,
  & > li > ul > li > a {
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${ParagraphColorSwitch};
    }
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${ParagraphColorSwitch};
  }
`;
const BlogContent = ({ theme, blogContent }) => {
  const html = blogContent;
  console.log(html);
  const options = {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "h1") {
        return (
          <StyledH1 $theme={theme}>{domToReact(domNode.children)}</StyledH1>
        );
      }
      if (domNode.type === "tag" && domNode.name === "h2") {
        return (
          <StyledH2 $theme={theme}>{domToReact(domNode.children)}</StyledH2>
        );
      }
      if (domNode.type === "tag" && domNode.name === "h3") {
        return (
          <StyledH3 $theme={theme}>{domToReact(domNode.children)}</StyledH3>
        );
      }
      if (domNode.type === "tag" && domNode.name === "p") {
        return <StyledP $theme={theme}>{domToReact(domNode.children)}</StyledP>;
      }
      if (domNode.type === "tag" && domNode.name === "ul") {
        return (
          <StyledList $theme={theme}>{domToReact(domNode.children)}</StyledList>
        );
      }
      if (domNode.type === "tag" && domNode.name === "a") {
        return (
          <StyledLink $theme={theme}>{domToReact(domNode.children)}</StyledLink>
        );
      }
    },
  };
  return <>{parse(html, options)}</>;
};
export default BlogContent;

//in page link not working
