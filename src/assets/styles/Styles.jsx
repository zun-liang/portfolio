import { domToReact } from "html-react-parser";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* eslint-disable react-refresh/only-export-components */
import Cloud from "../images/cloud.svg";
import AutoDark from "../images/cursor/cursor-auto-dark.svg";
import AutoLight from "../images/cursor/cursor-auto-light.svg";
import PointerDark from "../images/cursor/cursor-pointer-dark.svg";
import PointerLight from "../images/cursor/cursor-pointer-light.svg";

// Background setup
export const BGSwitch = ({ theme }) =>
  theme.mode
    ? `url(${Cloud}), var(--light-background)`
    : `linear-gradient(90deg, var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        linear-gradient(var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        var(--dot-color)`;

//Coherent color switch
export const BackgroundSwitch = ({ theme }) =>
  theme.mode ? "var(--light-background)" : "var(--dark-background)";
export const PrimarySwitch = ({ theme }) =>
  theme.mode ? "var(--light-primary)" : "var(--dark-primary)";
export const SecondarySwitch = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-secondary)";
export const TertiarySwitch = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-tertiary)";
export const ParagraphSwitch = ({ theme }) =>
  theme.mode ? "var(--light-paragraph)" : "var(--dark-paragraph)";
export const HoverSwitch = ({ theme }) =>
  theme.mode ? "var(--light-hover)" : "var(--dark-hover)";

//Incoherent color switch
export const OpacitySwitch = ({ theme }) =>
  theme.mode ? "rgba(255, 255, 255, 0.5)" : "transparent";
export const OpaqueSwitch = ({ theme }) =>
  theme.mode ? "rgba(255, 255, 255, 0.5)" : "#282828";
export const PrimarySecondary = ({ theme }) =>
  theme.mode ? "var(--light-primary)" : "var(--dark-secondary)";
export const PrimaryTertiary = ({ theme }) =>
  theme.mode ? "var(--light-primary)" : "var(--dark-tertiary)";
export const SecondaryPrimary = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-primary)";
export const SecondaryTertiary = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-tertiary)";
export const SecondaryParagraph = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-paragraph)";
export const SecondaryHover = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-hover)"; //only once
export const TertiaryPrimary = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-primary)";
export const TertiarySecondary = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-secondary)";
export const TertiaryParagraph = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-paragraph)";
export const TertiaryDot = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dot-color)";
export const OutlineSwitch = ({ theme }) =>
  theme.mode ? "none" : "2px solid var(--dark-secondary)";

//Cursor switch
export const AutoSwitch = ({ theme }) =>
  theme.mode ? `url(${AutoLight}) 12 12, auto` : `url(${AutoDark}) 12 12, auto`;

export const PointerSwitch = ({ theme }) =>
  theme.mode
    ? `url(${PointerLight}) 12 12, pointer`
    : `url(${PointerDark}) 12 12, pointer`;

//Shared styles
export const BasicButton = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: unset;
  cursor: ${PointerSwitch};
  color: ${PrimarySwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
`;

export const BasicLink = styled(Link)`
  text-decoration: none;
  cursor: ${PointerSwitch};
  font-family: "Black Ops One", sans-serif;
  font-size: 1rem;
`;

//HTML parse rules
const StyledH1 = styled.h1`
  color: ${PrimaryTertiary};
  font-family: "Black Ops One", sans-serif;
  text-shadow: 1px 1px ${SecondaryParagraph};
`;
const StyledH2 = styled.h2`
  color: ${TertiarySwitch};
  text-shadow: 1px 1px ${SecondaryParagraph};
  font-family: "Black Ops One", sans-serif;
`;
const StyledH3 = styled.h3`
  color: ${TertiarySwitch};
  text-shadow: 1px 1px ${SecondaryParagraph};
  font-family: "Black Ops One", sans-serif;
`;
const StyledH4 = styled.h4`
  color: ${TertiarySwitch};
  font-family: "Black Ops One", sans-serif;
`;
const StyledH5 = styled.h5`
  color: ${TertiarySwitch};
  font-family: "Black Ops One", sans-serif;
`;
const StyledP = styled.p`
  color: ${ParagraphSwitch};
  line-height: 1.5;
  & > a {
    text-underline-offset: 2px;
    cursor: ${PointerSwitch};
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${ParagraphSwitch};
    }
  }
`;
const StyledList = styled.ul`
  & > li > ul > li {
    margin-left: 1rem;
    color: ${ParagraphSwitch};
    line-height: 1.5;
  }
  & > li {
    margin-left: 2rem;
    color: ${ParagraphSwitch};
    line-height: 1.6;
  }
  & > li > a,
  & > li > ul > li > a {
    text-underline-offset: 2px;
    cursor: ${PointerSwitch};
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${ParagraphSwitch};
    }
  }
`;
const StyledLink = styled.a`
  text-underline-offset: 2px;
  cursor: ${PointerSwitch};
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${ParagraphSwitch};
  }
`;
const StyledImg = styled.img``;

export const createMarkdownOptions = () => {
  return {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "h1") {
        return <StyledH1>{domToReact(domNode.children)}</StyledH1>;
      }
      if (domNode.type === "tag" && domNode.name === "h2") {
        return <StyledH2>{domToReact(domNode.children)}</StyledH2>;
      }
      if (domNode.type === "tag" && domNode.name === "h3") {
        return <StyledH3>{domToReact(domNode.children)}</StyledH3>;
      }
      if (domNode.type === "tag" && domNode.name === "h4") {
        return <StyledH4>{domToReact(domNode.children)}</StyledH4>;
      }
      if (domNode.type === "tag" && domNode.name === "h5") {
        return <StyledH5>{domToReact(domNode.children)}</StyledH5>;
      }
      if (domNode.type === "tag" && domNode.name === "p") {
        return <StyledP>{domToReact(domNode.children)}</StyledP>;
      }
      if (domNode.type === "tag" && domNode.name === "ul") {
        return <StyledList>{domToReact(domNode.children)}</StyledList>;
      }
      if (domNode.type === "tag" && domNode.name === "a") {
        return <StyledLink>{domToReact(domNode.children)}</StyledLink>;
      }
      if (domNode.type === "tag" && domNode.name === "img") {
        return (
          <StyledImg
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
