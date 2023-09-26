import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --light-background: #f9ffda;
  --light-primary: #beadfa;
  --light-secondary: #d0bfff;
  --light-tertiary: #dfccfb;
  --light-hover: black;
  --dark-background: #000000;
  --dark-primary: #aa14f0;
  --dark-secondary: #bc8cf2;
  --dark-tertiary: #9f5af6;
  --dark-hover: white;
  --app-height: 100%;
}

html,
body {
  width: 100vw;
  height: 100%;
  overflow-x: hidden;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  color: ${({ $theme }) =>
    $theme ? "var(--light-primary)" : "var(--dark-primary)"};
  background-color:${({ $theme }) =>
    $theme ? "var(--light-background)" : "var(--dark-background)"}; 
}

@media (min-width: 800px) {
  html,
  body {
    font-size: 16px;
  }
}

/*
font-family: 'Black Ops One', cursive;
font-family: 'Lobster', cursive;
font-family: 'Roboto', sans-serif;
*/

`;

export default GlobalStyles;
