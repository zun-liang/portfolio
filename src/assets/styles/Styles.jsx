/* eslint-disable react-refresh/only-export-components */
import Cloud from "../images/cloud.svg";
import CursorAutoDark from "../images/cursor/cursor-auto-dark.svg";
import CursorAutoLight from "../images/cursor/cursor-auto-light.svg";
import CursorPointerDark from "../images/cursor/cursor-pointer-dark.svg";
import CursorPointerLight from "../images/cursor/cursor-pointer-light.svg";
import styled from "styled-components";
import { domToReact } from "html-react-parser";
import { Link } from "react-router-dom";

// Background setup
export const BackgroundSwitch = ({ $theme }) =>
  $theme
    ? `url(${Cloud}), var(--light-background)`
    : `linear-gradient(90deg, var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        linear-gradient(var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        var(--dot-color)`;

//Coherent color switch
export const BackgroundColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-background)" : "var(--dark-background)";

export const PrimaryColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-primary)" : "var(--dark-primary)";

export const SecondaryColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "var(--dark-secondary)";

export const TertiaryColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-tertiary)";

export const ParagraphColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-paragraph)" : "var(--dark-paragraph)";

export const HoverColorSwitch = ({ $theme }) =>
  $theme ? "var(--light-hover)" : "var(--dark-hover)";

//Incoherent color switch
export const OpacitySwitch = ({ $theme }) =>
  $theme ? "rgba(255, 255, 255, 0.5)" : "transparent";
export const PrimarySecondary = ({ $theme }) =>
  $theme ? "var(--light-primary)" : "var(--dark-secondary)";
export const SecondaryPrimary = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "var(--dark-primary)";
export const SecondaryHover = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "var(--dark-hover)";
export const SecondaryTransparent = ({ $theme }) =>
  $theme ? "var(--light-secondary)" : "transparent";
export const TertiaryPrimary = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-primary)";
export const TertiarySecondary = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-secondary)";
export const TertiaryParagraph = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-paragraph)";
export const TertiaryHover = ({ $theme }) =>
  $theme ? "var(--light-tertiary)" : "var(--dark-hover)";
export const HoverPrimary = ({ $theme }) =>
  $theme ? "var(--light-hover)" : "var(--dark-primary)";
export const BackgroundSecondary = ({ $theme }) =>
  $theme ? "var(--light-background)" : "var(--dark-secondary)";
export const OutlineSwitch = ({ $theme }) =>
  $theme ? "none" : "2px solid var(--dark-secondary)";

//Cursor switch
export const CursorAutoSwitch = ({ $theme }) =>
  $theme
    ? `url(${CursorAutoLight}) 12 12, auto`
    : `url(${CursorAutoDark}) 12 12, auto`;

export const CursorPointerSwitch = ({ $theme }) =>
  $theme
    ? `url(${CursorPointerLight}) 12 12, pointer`
    : `url(${CursorPointerDark}) 12 12, pointer`;

//Shared styles
export const BasicButton = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: unset;
  cursor: ${CursorPointerSwitch};
  color: ${PrimaryColorSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
`;

export const BasicLink = styled(Link)`
  text-decoration: none;
  cursor: ${CursorPointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
`;

//HTML parse rules
const StyledH1 = styled.h1``;
const StyledH2 = styled.h2`
  color: ${PrimarySecondary};
`;
const StyledH3 = styled.h3`
  color: ${PrimarySecondary};
`;
const StyledP = styled.p`
  color: ${ParagraphColorSwitch};
  line-height: 1.5;
  & > a {
    text-underline-offset: 2px;
    cursor: ${CursorPointerSwitch};
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
    line-height: 1.6;
  }
  & > li > a,
  & > li > ul > li > a {
    text-underline-offset: 2px;
    cursor: ${CursorPointerSwitch};
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${ParagraphColorSwitch};
    }
  }
`;
const StyledLink = styled.a`
  text-underline-offset: 2px;
  cursor: ${CursorPointerSwitch};
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${ParagraphColorSwitch};
  }
`;
const StyledImg = styled.img``;

export const createMarkdownOptions = (theme) => {
  return {
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
      if (domNode.type === "tag" && domNode.name === "img") {
        return (
          <StyledImg
            $theme={theme}
            src={domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width}
            height={domNode.attribs.height}
          />
        );
      }
    },
  };
};
