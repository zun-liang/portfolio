import { domToReact } from "html-react-parser";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* eslint-disable react-refresh/only-export-components */
import Cloud from "../images/cloud.svg";
import AutoDark from "../images/cursor/cursor-auto-dark.svg";
import AutoLight from "../images/cursor/cursor-auto-light.svg";
import PointerDark from "../images/cursor/cursor-pointer-dark.svg";
import PointerLight from "../images/cursor/cursor-pointer-light.svg";

/* ===  Background setup === */
export const BGSwitch = ({ theme }) =>
  theme.mode
    ? `url(${Cloud}), var(--light-background)`
    : `linear-gradient(90deg, var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        linear-gradient(var(--dark-background) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
        var(--dot-color)`;

/* ===  Coherent color switch === */
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
export const HighlightSwitch = ({ theme }) =>
  theme.mode ? "var(--light-highlight)" : "var(--dark-highlight)";
export const ErrorSwitch = ({ theme }) =>
  theme.mode ? "var(--light-error)" : "var(--dark-error)";

/* ===  Incoherent color switch === */
export const OpacitySwitch = ({ theme }) =>
  theme.mode ? "var(--light-hover)" : "transparent";
export const OpaqueSwitch = ({ theme }) =>
  theme.mode ? "var(--light-hover)" : "#282828";
export const PrimarySecondary = ({ theme }) =>
  theme.mode ? "var(--light-primary)" : "var(--dark-secondary)";
export const PrimaryTertiary = ({ theme }) =>
  theme.mode ? "var(--light-primary)" : "var(--dark-tertiary)";
export const PrimaryHighlight = ({ theme }) =>
  theme.mode ? "var(--light-primary)" : "var(--dark-highlight)";
export const SecondaryPrimary = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-primary)";
export const SecondaryTertiary = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-tertiary)";
export const SecondaryParagraph = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-paragraph)";
export const SecondaryTransparent = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "transparent";
export const SecondaryHover = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-hover)";
export const SecondaryHighlight = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-highlight)";
export const SecondaryDot = ({ theme }) =>
  theme.mode ? "var(--light-secondary)" : "var(--dark-dot)";
export const TertiaryPrimary = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-primary)";
export const TertiarySecondary = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-secondary)";
export const TertiaryParagraph = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-paragraph)";
export const TertiaryHighlight = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-highlight)";
export const TertiaryBackground = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dark-background)";
export const TertiaryTransparent = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "transparent";
export const TertiaryDot = ({ theme }) =>
  theme.mode ? "var(--light-tertiary)" : "var(--dot-color)";
export const HighlightPrimary = ({ theme }) =>
  theme.mode ? "var(--light-highlight)" : "var(--dark-primary)";
export const OutlineSwitch = ({ theme }) =>
  theme.mode ? "none" : "2px solid var(--dark-secondary)";
export const BackgroundTransparent = ({ theme }) =>
  theme.mode ? "var(--light-background)" : "transparent";
export const BackgroundSecondary = ({ theme }) =>
  theme.mode ? "var(--light-background)" : "var(--dark-secondary)";
export const BackgroundDot = ({ theme }) =>
  theme.mode ? "var(--light-background)" : "var(--dot-color)";

/* ===  Cursor switch === */
export const AutoSwitch = ({ theme }) =>
  theme.mode ? `url(${AutoLight}) 6 6, auto` : `url(${AutoDark}) 6 6, auto`;

export const PointerSwitch = ({ theme }) =>
  theme.mode
    ? `url(${PointerLight}) 6 6, pointer`
    : `url(${PointerDark}) 6 6, pointer`;

/* ===  Box Shadow switch === */

export const BoxShadowSwitch = ({ theme }) =>
  theme.mode
    ? `0.3px 0.5px 0.7px hsl(var(--light-shadow-color) / 0.23),
  0.9px 1.8px 2.5px -0.6px hsl(var(--light-shadow-color) / 0.28),
  2.1px 4.1px 5.7px -1.2px hsl(var(--light-shadow-color) / 0.32),
  4.8px 9.5px 13.1px -1.8px hsl(var(--light-shadow-color) / 0.37)`
    : `0.3px 0.5px 0.9px hsl(var(--dark-shadow-color) / 0),
  1.5px 2.9px 4.9px hsl(var(--dark-shadow-color) / 0.27),
  3px 6.1px 10.2px hsl(var(--dark-shadow-color) / 0.55),
  6.3px 12.5px 21px hsl(var(--dark-shadow-color) / 0.82)`;

/* ===  Shared styles === */
export const BasicButton = styled.button`
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: unset;
  cursor: ${PointerSwitch};
  color: ${PrimarySwitch};
  font-family: var(--ff-focus);
  font-size: 1rem;
`;

export const BasicLink = styled(Link)`
  text-decoration: none;
  cursor: ${PointerSwitch};
  font-family: var(--ff-focus);
  font-size: 1rem;
`;

export const BasicInput = styled.input`
  border-radius: 5px;
  border: 2px solid ${TertiarySecondary};
  font-size: 0.9rem;
  font-family: var(--ff-regular);
  font-weight: 400;
  color: ${PrimaryTertiary};
  background-color: white;
  &:focus {
    outline: ${OutlineSwitch};
  }
  &::placeholder {
    font-weight: 400;
  }
  &:autofill,
  &:autofill:hover,
  &:autofill:focus,
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0 1000px white inset;
    -webkit-text-fill-color: ${PrimarySwitch};
  }
`;

export const BackContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const ActionDiv = styled.div`
  background: ${BGSwitch};
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

/* ===  HTML parse rules for blog body === */
const StyledH1 = styled.h1`
  color: ${PrimaryTertiary};
  font-family: var(--ff-focus);
  text-shadow: -2px -2px ${SecondaryParagraph};
  font-weight: 400;
`;
const StyledH2 = styled.h2`
  color: ${PrimaryTertiary};
  text-shadow: -1px -1px ${SecondaryTransparent};
  font-family: var(--ff-focus);
  font-size: 1.6rem;
  font-weight: 400;
`;
const StyledH3 = styled.h3`
  color: ${PrimaryTertiary};
  text-shadow: -1px -1px ${SecondaryTransparent};
  font-family: var(--ff-focus);
  font-size: 1.3rem;
  font-weight: 400;
`;
const StyledH4 = styled.h4`
  color: ${PrimarySecondary};
  font-family: var(--ff-focus);
  font-size: 1.2rem;
  font-weight: 400;
`;
const StyledH5 = styled.h5`
  color: ${PrimarySecondary};
  font-family: var(--ff-focus);
  font-size: 1.1rem;
  font-weight: 400;
`;
const StyledP = styled.p`
  color: ${ParagraphSwitch};
  line-height: 1.5;
  font-size: 1rem;
  & > a {
    text-underline-offset: 2px;
    cursor: ${PointerSwitch};
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${HighlightSwitch};
    }
  }
`;
const StyledPre = styled.pre`
  overflow: auto;
`;
const StyledList = styled.ul`
  & > li {
    margin-left: 2rem;
    color: ${ParagraphSwitch};
    line-height: 1.6;
    font-size: 1rem;
  }
  & > li > ul > li {
    margin-left: 1rem;
    color: ${ParagraphSwitch};
    line-height: 1.5;
    font-size: 1rem;
  }
  & > li > a,
  & > li > p > a,
  & > li > ul > li > a {
    text-underline-offset: 2px;
    cursor: ${PointerSwitch};
    font-size: 1rem;
    &:link,
    &:hover,
    &:active,
    &:visited {
      color: ${HighlightSwitch};
    }
  }
  & > li > p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  & > li > figure {
    margin: 1rem auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > li > figure > img {
    width: 100%;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: ${BoxShadowSwitch};
  }
  & > li > figure > figcaption {
    margin: 0.5rem 0;
    text-align: center;
    font-family: var(--ff-focus);
    font-size: 0.9rem;
    color: ${HighlightSwitch};
  }
  @media (min-width: 600px) {
    & > li > figure > img {
      width: 300px;
    }
  }
  @media (min-width: 1200px) {
    & > li > figure > img {
      width: 400px;
    }
  }
`;
const StyledLink = styled.a`
  text-underline-offset: 2px;
  font-size: 1rem;
  cursor: ${PointerSwitch};
  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${ParagraphSwitch};
  }
`;
const StyledFigure = styled.figure`
  margin: 1rem auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > img {
    width: 100%;
    margin: 0 auto;
    border-radius: 1rem;
    box-shadow: ${BoxShadowSwitch};
  }
  & > figcaption {
    margin: 0.5rem 0;
    text-align: center;
    font-family: var(--ff-focus);
    font-size: 0.9rem;
    color: ${HighlightSwitch};
  }
  @media (min-width: 600px) {
    & > img {
      width: 300px;
    }
  }
  @media (min-width: 1200px) {
    & > img {
      width: 400px;
    }
  }
`;
const StyledImg = styled.img``;

export const createMarkdownOptions = () => {
  return {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "h1") {
        const id = domNode.attribs.id;
        return <StyledH1 id={id}>{domToReact(domNode.children)}</StyledH1>;
      }
      if (domNode.type === "tag" && domNode.name === "h2") {
        const id = domNode.attribs.id;
        return <StyledH2 id={id}>{domToReact(domNode.children)}</StyledH2>;
      }
      if (domNode.type === "tag" && domNode.name === "h3") {
        const id = domNode.attribs.id;
        return <StyledH3 id={id}>{domToReact(domNode.children)}</StyledH3>;
      }
      if (domNode.type === "tag" && domNode.name === "h4") {
        const id = domNode.attribs.id;
        return <StyledH4 id={id}>{domToReact(domNode.children)}</StyledH4>;
      }
      if (domNode.type === "tag" && domNode.name === "h5") {
        const id = domNode.attribs.id;
        return <StyledH5 id={id}>{domToReact(domNode.children)}</StyledH5>;
      }
      if (domNode.type === "tag" && domNode.name === "p") {
        const id = domNode.attribs.id;
        return <StyledP id={id}>{domToReact(domNode.children)}</StyledP>;
      }
      if (domNode.type === "tag" && domNode.name === "pre") {
        const id = domNode.attribs.id;
        return <StyledPre id={id}>{domToReact(domNode.children)}</StyledPre>;
      }
      if (domNode.type === "tag" && domNode.name === "ul") {
        const id = domNode.attribs.id;
        return <StyledList id={id}>{domToReact(domNode.children)}</StyledList>;
      }
      if (domNode.type === "tag" && domNode.name === "a") {
        const id = domNode.attribs.id;
        return <StyledLink id={id}>{domToReact(domNode.children)}</StyledLink>;
      }
      if (domNode.type === "tag" && domNode.name === "figure") {
        const id = domNode.attribs.id;
        return (
          <StyledFigure id={id}>{domToReact(domNode.children)}</StyledFigure>
        );
      }
      if (domNode.type === "tag" && domNode.name === "img") {
        const id = domNode.attribs.id;
        return (
          <StyledImg
            id={id}
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
