import { createGlobalStyle } from "styled-components";

import { AutoSwitch, BackgroundSwitch, BGSwitch, PrimarySwitch, TertiaryPrimary } from "./assets/styles/Styles";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --light-background: #f7f8d4;
        --light-primary: #000000;
        --light-secondary: #ffffff;
        --light-tertiary: #7f6f64;
        --light-paragraph: #000000;
        --light-hover: rgba(255, 255, 255, 0.5);
        --light-highlight: #623600;

        --dark-background: #121212;
        --dark-primary: #ff76a7;
        --dark-secondary: #d6ffc3;
        --dark-tertiary: #ff76a7;
        --dark-paragraph: #d6ffc3;
        --dark-hover: #121212;
        --dark-highlight: #FFCEC3;

        --dot-size: 1px;
        --dot-space: 25px;
        --dot-color: #8b8b8b7c;

        --app-height: 100%;
    }

    html, body {
        width: 100vw;
        height: 100%;
        background: ${BGSwitch};
        overflow-x: hidden;
        font-family: "Roboto", sans-serif;
        font-size: 14px;
        color: ${PrimarySwitch}; 
        cursor: ${AutoSwitch};
        scrollbar-color: ${TertiaryPrimary} ${BackgroundSwitch};
        scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${TertiaryPrimary};
        border-radius: 10px; 
    }

    ::-webkit-scrollbar-track {
        background: ${BackgroundSwitch}; 
    }
    
    @media (min-width: 375px) {
        html,
        body {
            font-size: 16px;
        }
    }
    @media (min-width: 1450px) {
        html,
        body {
            font-size: 18px;
        }
    }
    @media (min-width: 1900px) {
        html,
        body {
            font-size: 20px;
        }
    }
`;

export default GlobalStyles;
