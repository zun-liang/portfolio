import { createGlobalStyle } from "styled-components";

import { BackgroundSwitch, CursorAutoSwitch, PrimaryColorSwitch } from "./assets/styles/Styles";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --light-background: #badbf4;
        --light-primary: #000000;
        --light-secondary: #ffffff;
        --light-tertiary: #6c7a89;
        --light-paragraph: #000000;
        --light-hover: #badbf4;

        --dark-background: #000000;
        --dark-primary: #ff76a7;
        --dark-secondary: #d6ffc3;
        --dark-tertiary: #C6FFAC;
        --dark-paragraph: #E6A5B7;
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
