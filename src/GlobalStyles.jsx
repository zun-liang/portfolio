import { createGlobalStyle } from "styled-components";
import CursorLight from "./assets/images/cursor/cross-black-30x30.png";
import CursorDark from "./assets/images/cursor/cross-white-30x30.png";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --light-background: #f9ffda;
        --light-primary: #beadfa;
        --light-secondary: #d0bfff;
        --light-tertiary: #dfccfb;
        --light-paragraph: #AEA9BA;
        --light-hover: #8779C1;

        --dark-background: #000000;
        --dark-primary: #aa14f0;
        --dark-secondary: #CB41FF;
        --dark-tertiary: #FF83FF;
        --dark-paragraph: #EC63FF;
        --dark-hover: #FFC7FF;

        /*--dark-background: #2F323A;
        --dark-primary: #C47AC0;
        --dark-secondary:  #E39EC1;
        --dark-paragraph: #77567A;
        --dark-hover: #FFC7FF;*/

        --app-height: 100%;
    }

    html,
    body {
        width: 100vw;
        height: 100%;
        background-color:${({ $theme }) =>
          $theme ? "var(--light-background)" : "var(--dark-background)"}; 
        overflow-x: hidden;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        color: ${({ $theme }) =>
          $theme ? "var(--light-primary)" : "var(--dark-primary)"};
        cursor:  ${({ $theme }) =>
          $theme
            ? `url(${CursorLight}) 15 15, auto`
            : `url(${CursorDark}) 15 15, auto`};
    }

    @media (min-width: 800px) {
        html,
        body {
            font-size: 16px;
        }
    }
`;

export default GlobalStyles;
