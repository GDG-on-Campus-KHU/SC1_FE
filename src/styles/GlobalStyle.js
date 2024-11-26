import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    width: 100%;
    height: 100dvh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
