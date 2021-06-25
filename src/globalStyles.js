import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*   {
        margin: 0;
        padding: 0;
    box-sizing: border-box;
    }

  body {
    font-family: 'Spartan', sans-serif;
  /* background: hsl(222, 26%, 31%); */
  /* min-height: 100vh; */

  }
`;

export default GlobalStyle;
