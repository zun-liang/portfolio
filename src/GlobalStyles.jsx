import { createGlobalStyle } from "styled-components";

import {
  BackgroundSwitch,
  CursorAutoSwitch,
  PrimaryColorSwitch,
  SecondaryColorSwitch,
  TertiaryPrimary,
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
        --dark-tertiary: #f25688;
        --dark-paragraph: #B3FBE7;
        --dark-hover: #121212;

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
    ::-webkit-scrollbar {
        width: 6px; 
    }

    ::-webkit-scrollbar-thumb {
        background: ${TertiaryPrimary};
        border-radius: 10px; 
    }

    ::-webkit-scrollbar-track {
        background: ${SecondaryColorSwitch}; 
    }


    @media (min-width: 800px) {
        html,
        body {
            font-size: 16px;
        }
    }
`;

export default GlobalStyles;
