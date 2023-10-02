import { createGlobalStyle } from "styled-components";
import {
  BackgroundSwitch,
  PrimaryColorSwitch,
  CursorAutoSwitch,
} from "./assets/styles/Styles";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --light-background: #f9ffda;
        --light-primary: #906dce;
        --light-secondary: #ABCE6D;
        --light-tertiary: #beadfa;
        --light-paragraph: #000000;
        --light-hover: #beadfa;


        --dark-background: #000000;
        --dark-primary: #ff76a7;
        --dark-secondary: #d6ffc3;
        --dark-tertiary: #C3FBFF;
        --dark-paragraph: #ffc7c3;
        --dark-hover: #ffd2ec;
        --dot-size: 1px;
        --dot-space: 25px;

        --app-height: 100%;
    }

    html,
    body {
        width: 100vw;
        height: 100%;
        background: ${BackgroundSwitch};
        overflow-x: hidden;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        color: ${PrimaryColorSwitch}; 
        cursor: ${CursorAutoSwitch};
        }

    @media (min-width: 800px) {
        html,
        body {
            font-size: 16px;
        }
    }
`;

export default GlobalStyles;
