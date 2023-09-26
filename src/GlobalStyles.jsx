import { createGlobalStyle } from "styled-components";

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
    }

    @media (min-width: 800px) {
        html,
        body {
            font-size: 16px;
        }
    }
`;

export default GlobalStyles;
