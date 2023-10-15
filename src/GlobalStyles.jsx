import { createGlobalStyle } from "styled-components";

import {
  BackgroundSwitch,
  CursorAutoSwitch,
  PrimaryColorSwitch,
} from "./assets/styles/Styles";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --light-background: #badbf4;
        --light-primary: #181c1f;
        --light-secondary: #ffffff;
        --light-tertiary: #6c7a89;
        --light-paragraph: #181c1f;
        --light-hover: #f4d3ba;

        --dark-background: #121212;
        --dark-primary: #ff76a7;
        --dark-secondary: #d6ffc3;
        --dark-tertiary: #bdd9b0;
        --dark-paragraph: #E6A5B7;
        --dark-hover: #ffc5d7;

        --dot-size: 1px;
        --dot-space: 25px;
        --dot-color: #8b8b8b;

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
