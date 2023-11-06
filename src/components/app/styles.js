import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    height:100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100vh;
    font-family: ${(props) => props.theme.fontFamily};
    font-size:  ${(props) => props.theme.fontSize};
    line-height: 27px;
    font-weight: 400;
    color:  ${(props) => props.theme.colorBlackForText};
  }

  html{
      margin-left: calc(100vw - 100%);
  }
`;